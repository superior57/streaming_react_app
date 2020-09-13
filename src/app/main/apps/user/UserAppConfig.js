import React from 'react';
import { Redirect } from 'react-router-dom';

const UserAppConfig = {
	settings: {
		layout: {}
	},
	routes: [
		// {
		// 	path: '/apps/user/products/:productId/:productHandle?',
		// 	component: React.lazy(() => import('./product/Product'))
		// },
		{
			path: '/apps/user/register',
			component: React.lazy(() => import('./register/Register'))
		},
		{
			path: '/apps/user/:userId',
			component: React.lazy(() => import('./user/User'))
		},
		{
			path: '/apps/users/all',
			component: React.lazy(() => import('./users/Users'))
		},
		{
			path: '/apps/club/club',
			component: React.lazy(() => import('./club/Club'))
		},
		{
			path: '/apps/user',
			component: () => <Redirect to="/apps/user/products" />
		}
	]
};

export default UserAppConfig;
