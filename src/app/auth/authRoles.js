/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['admin'],
	client: ['admin', 'client'],
	consumer: ['admin', 'client', 'consumer'],
	onlyClient: ['client'],
	onlyConsumer: ['consumer'],
	onlyGuest: []
};

export default authRoles;
