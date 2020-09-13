import React from 'react';
import { Redirect } from 'react-router-dom';

const UsersAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/users/:id',
			component: React.lazy(() => import('./UsersApp'))
		},
		{
			path: '/apps/users',
			component: () => <Redirect to="/apps/users/all" />
		}
	]
};

export default UsersAppConfig;
