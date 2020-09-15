import FuseUtils from '@fuse/utils';
import appsConfigs from 'app/main/apps/appsConfigs';
import authRoleExamplesConfigs from 'app/main/auth/authRoleExamplesConfigs';
import CallbackConfig from 'app/main/callback/CallbackConfig';
import DocumentationConfig from 'app/main/documentation/DocumentationConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import ForgotPasswordConfig from 'app/main/forgot/ForgotPasswordConfig';
import ResetPasswordConfig from 'app/main/reset/ResetPasswordConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import RegisterConfig from 'app/main/register/RegisterConfig';
import UserInterfaceConfig from 'app/main/user-interface/UserInterfaceConfig';
import React from 'react';
import { Redirect } from 'react-router-dom';

const routeConfigs = [
	...appsConfigs,
	...pagesConfigs,
	...authRoleExamplesConfigs,
	UserInterfaceConfig,
	DocumentationConfig,
	LogoutConfig,
	LoginConfig,
	ForgotPasswordConfig,
	ResetPasswordConfig,
	RegisterConfig,
	LogoutConfig,
	CallbackConfig
];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','client','consumer']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','client','consumer']),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/apps/streaming" />
	},
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	}
];

export default routes;
