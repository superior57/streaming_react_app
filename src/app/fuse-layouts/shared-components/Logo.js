import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';

const DASHBOARD_LOGO_DARK = "assets/images/logos/Dashboard-logo-header_dark.png";

const useStyles = makeStyles(theme => ({
	root: {
		'& .logo-icon': {
			width: 24,
			height: 24,
			transition: theme.transitions.create(['width', 'height'], {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		},
		'& .react-badge, & .logo-text': {
			transition: theme.transitions.create('opacity', {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		}
	},
	reactBadge: {
		backgroundColor: '#121212',
		color: '#61DAFB'
	}
}));

function Logo() {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, 'flex items-center')}>
			<img className="logo-icon" height="150" src={DASHBOARD_LOGO_DARK} alt="logo" 
				style={{
					width: "160px",
					height: "60px",
					margin: "30px 0px -20px 35px"
				}}
			/>
			{/* <div className={clsx(classes.reactBadge, 'react-badge flex items-center py-4 px-8 rounded')}>
				<img
					className="react-logo"
					src={DASHBOARD_LOGO_DARK}
					alt="react"
					width="16"
				/>
				<span className="react-text text-12 mx-4">React</span>
			</div> */}
		</div>
	);
}

export default Logo;
