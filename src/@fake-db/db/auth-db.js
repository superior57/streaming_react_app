import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import jwt from 'jsonwebtoken';
import mock from '../mock';
/* eslint-disable camelcase */

const jwtConfig = {
	secret: 'some-secret-code-goes-here',
	expiresIn: '2 days' // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
};

const authDB = {
	users: [
		{
			id: '1',
			uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
			from: 'custom-db',
			password: 'admin',
			role: 'admin',
			status: 'ativo',
			data: {
				displayName: 'Abbott Keitch',
				photoURL: 'assets/images/avatars/Abbott.jpg',
				email: 'admin@admin.com',
				cpf: '666.666.66.07',
				settings: {
					layout: {
						style: 'layout1',
						config: {
							scroll: 'content',
							navbar: {
								display: true,
								folded: false,
								position: 'left'
							},
							toolbar: {
								display: true,
								style: 'fixed',
								position: 'below'
							},
							footer: {
								display: false,
								style: 'fixed',
								position: 'below'
							},
							mode: 'fullwidth'
						}
					},
					customScrollbars: true,
					theme: {
						main: 'default',
						navbar: 'blueDark',
						toolbar: 'default',
						footer: 'default'
					}
				},
				shortcuts: ['calendar', 'mail', 'contacts']
			}
		},
		{
			id: '2',
			uuid: 'XgbuVEXBU6gtSKdbTYR1Zbbby1i3',
			from: 'custom-db',
			password: 'client',
			role: 'client',
			status: 'ativo',
			data: {
				displayName: 'Arnold Matlock',
				photoURL: 'assets/images/avatars/Arnold.jpg',
				email: 'client@client.com',
				cpf: '666.777.66.07',
				settings: {
					layout: {
						style: 'layout1',
						config: {
							scroll: 'content',
							navbar: {
								display: true
							},
							toolbar: {
								display: true,
								position: 'below'
							},
							footer: {
								display: true,
								style: 'fixed'
							}
						}
					},
					customScrollbars: true,
					theme: {
						main: 'default',
						navbar: 'blueDefault',
						toolbar: 'default',
						footer: 'default'
					}
				},
				shortcuts: ['calendar', 'mail', 'contacts', 'todo']
			}
		},
		{
			id: '3',
			uuid: 'XgbuVEXBU6gtSKdbTYR1Zbbby1i4',
			from: 'custom-db',
			password: 'consumer',
			role: 'consumer',
			status: 'ativo',
			data: {
				displayName: 'Arnold Dark',
				photoURL: 'assets/images/avatars/Arnold.jpg',
				email: 'consumer@consumer.com',
				cpf: '666.333.66.07',
				settings: {
					layout: {
						style: 'layout1',
						config: {
							scroll: 'content',
							navbar: {
								display: true
							},
							toolbar: {
								display: true,
								position: 'below'
							},
							footer: {
								display: true,
								style: 'fixed'
							}
						}
					},
					customScrollbars: true,
					theme: {
						main: 'default',
						navbar: 'blueLight',
						toolbar: 'default',
						footer: 'default'
					}
				},
				shortcuts: ['calendar', 'mail', 'contacts', 'todo']
			}
		}
	]
};

mock.onGet('/api/auth').reply(config => {
	const data = JSON.parse(config.data);
	const { email, password } = data;

	const user = _.cloneDeep(authDB.users.find(_user => _user.data.email === email));

	const error = {
		email: user ? null : 'Check your username/email',
		password: user && user.password === password ? null : 'Check your password'
	};

	if (!error.email && !error.password && !error.displayName) {
		delete user.password;

		const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}
	return [200, { error }];
});

mock.onGet('/api/auth/access-token').reply(config => {
	const data = JSON.parse(config.data);
	const { access_token } = data;

	try {
		const { id } = jwt.verify(access_token, jwtConfig.secret);

		const user = _.cloneDeep(authDB.users.find(_user => _user.uuid === id));
		delete user.password;

		const updatedAccessToken = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token: updatedAccessToken
		};

		return [200, response];
	} catch (e) {
		const error = 'Invalid access token detected';
		return [401, { error }];
	}
});

mock.onPost('/api/auth/register').reply(request => {
	const data = JSON.parse(request.data);
	const { displayName, password, email } = data;
	const isEmailExists = authDB.users.find(_user => _user.data.email === email);
	const error = {
		email: isEmailExists ? 'The email is already in use' : null,
		displayName: displayName !== '' ? null : 'Enter display name',
		password: null
	};
	if (!error.displayName && !error.password && !error.email) {
		const newUser = {
			uuid: FuseUtils.generateGUID(),
			from: 'custom-db',
			password,
			role: 'admin',
			data: {
				displayName,
				photoURL: 'assets/images/avatars/Abbott.jpg',
				email,
				settings: {},
				shortcuts: []
			}
		};

		authDB.users = [...authDB.users, newUser];

		const user = _.cloneDeep(newUser);
		delete user.password;

		const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}
	return [200, { error }];
});

mock.onPost('/api/auth/user/update').reply(config => {
	const data = JSON.parse(config.data);
	const { user } = data;

	authDB.users = authDB.users.map(_user => {
		if (user.uuid === user.id) {
			return _.merge(_user, user);
		}
		return _user;
	});

	return [200, user];
});


mock.onGet('/api/auth/users').reply(() => {
	return [200, authDB.users];
});

mock.onGet('/api/auth/user').reply(request => {
	const { userId } = request.params;
	const response = _.find(authDB.users, { id: userId });
	return [200, response];
});