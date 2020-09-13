import { authRoles } from 'app/auth';
import ResetPassword from './ResetPassword';

const ResetPasswordConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/reset-password',
			component: ResetPassword
		}
	]
};

export default ResetPasswordConfig;
