import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseSettings from '@fuse/core/FuseSettings';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Dialog from '@material-ui/core/Dialog';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
	const theme = useTheme();
	return <Slide direction={theme.direction === 'ltr' ? 'left' : 'right'} ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
	button: {
		position: 'absolute',
		right: 0,
		top: 160,
		minWidth: 48,
		width: 48,
		height: 48,
		opacity: 0.9,
		padding: 0,
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
		zIndex: 999,
		color: theme.palette.getContrastText(red[500]),
		backgroundColor: red[500],
		'&:hover': {
			backgroundColor: red[500],
			opacity: 1
		}
	},
	'@keyframes rotating': {
		from: {
			transform: 'rotate(0deg)'
		},
		to: {
			transform: 'rotate(360deg)'
		}
	},
	buttonIcon: {
		animation: '$rotating 3s linear infinite'
	},
	dialogPaper: {
		position: 'fixed',
		width: 380,
		maxWidth: '90vw',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		top: 0,
		height: '100%',
		minHeight: '100%',
		bottom: 0,
		right: 0,
		margin: 0,
		zIndex: 1000,
		borderRadius: 0
	}
}));

function SettingsPanel() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button id="fuse-settings" className={classes.button} variant="contained" onClick={handleOpen}>
				<Icon className={classes.buttonIcon}>settings</Icon>
			</Button>

			<Dialog
				TransitionComponent={Transition}
				aria-labelledby="settings-panel"
				aria-describedby="settings"
				open={open}
				keepMounted
				onClose={handleClose}
				BackdropProps={{ invisible: true }}
				classes={{
					paper: classes.dialogPaper
				}}
			>
				<FuseScrollbars className="p-24 sm:p-32">
					<IconButton className="fixed top-0 ltr:right-0 rtl:left-0 z-10" onClick={handleClose}>
						<Icon>close</Icon>
					</IconButton>

					<Typography className="mb-32" variant="h6">
						Theme Settings
					</Typography>

					<FuseSettings />
				</FuseScrollbars>
			</Dialog>
		</>
	);
}

export default SettingsPanel;
