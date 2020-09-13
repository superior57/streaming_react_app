import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';


const drawerWidth = 400;
const headerHeight = 200;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
		width: '100%'
	},
	
}));

function Video(props) {
	const dispatch = useDispatch();

	const classes = useStyles(props);

	useEffect(() => {
		dispatch(Actions.getUserData());
		dispatch(Actions.getContacts());
	}, [dispatch]);

	return (
		<div className={clsx(classes.root)}>
			<video width="100%" autoplay="autoplay" controls>
				<source src="assets/uploads/1.mp4" type="video/mp4"/>
			</video>
		</div>
	);
}

export default withReducer('StreamingApp', reducer)(Video);
