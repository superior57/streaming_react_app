import FuseAnimate from '@fuse/core/FuseAnimate';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import CJWTLoginTab from './tabs/CJWTLoginTab';

const LOGO_DARK = 'assets/images/logos/logo-header_dark.png';

const useStyles = makeStyles(theme => ({
	root: {
		background: 'url("assets/images/backgrounds/msc_erp_back.svg")',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		color: theme.palette.primary.contrastText
	},
	logoStyle : {
		
	}
}));

function Login() {
	const classes = useStyles();
	

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
						<CardContent className="flex flex-col items-center justify-center p-32 -mt-192 w-360">
							<img className={clsx(classes.logoStyle, "w-128 mt-0 m-32")} src={LOGO_DARK} alt=""/>

							<CJWTLoginTab/>
						</CardContent>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default Login;
