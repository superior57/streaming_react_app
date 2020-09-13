import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 10,
	},
	container: {
	  display: 'grid',
	  gridTemplateColumns: 'repeat(12, 1fr)',
	  gridGap: theme.spacing(3),
	},
	paper: {
	  padding: theme.spacing(1),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	  whiteSpace: 'nowrap',
	  marginBottom: theme.spacing(1),
	  display: 'flex',
	  flexWrap: 'wrap',
	  marginBottom: '0 !important',
	},
	divider: {
	  margin: theme.spacing(2, 0),
	},
  }));	

function UsersHeader(props) {
	const dispatch = useDispatch();
	const searchText = useSelector(({ UsersApp }) => UsersApp.users.searchText);
	const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, "")}>
			<div className="flex flex-1 w-full items-center justify-between">
				<div className="flex flex-col items-start max-w-full">

					<div className="flex items-center max-w-full">
						<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
							<FuseAnimate animation="transition.slideLeftIn" delay={300}>
								<Typography className="text-16 sm:text-20 truncate">
									Usuários
								</Typography>
							</FuseAnimate>
							<FuseAnimate animation="transition.slideLeftIn" delay={300}>
								<Typography variant="caption">Lista de Usuários</Typography>
							</FuseAnimate>
						</div>
					</div>
				</div>

				{/* <div className="flex flex-1 items-center justify-center px-12">
					<ThemeProvider theme={mainTheme}>
						<FuseAnimate animation="transition.slideDownIn" delay={300}>
							<Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>
								<Icon color="action">search</Icon>

								<Input
									placeholder="Search"
									className="flex flex-1 mx-8"
									disableUnderline
									fullWidth
									value={searchText}
									inputProps={{
										'aria-label': 'Search'
									}}
									onChange={ev => dispatch(Actions.setOrdersSearchText(ev))}
								/>
							</Paper>
						</FuseAnimate>
					</ThemeProvider>
				</div> */}
			</div>
		</div>
	);
}

export default UsersHeader;
