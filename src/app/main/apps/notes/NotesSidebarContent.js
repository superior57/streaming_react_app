import FuseAnimate from '@fuse/core/FuseAnimate';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import * as Actions from 'app/main/apps/notes/store/actions';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
	paper: {
		[theme.breakpoints.down('md')]: {
			boxShadow: 'none'
		}
	},
	listItem: {
		color: 'inherit!important',
		textDecoration: 'none!important',
		height: 40,
		width: 'calc(100% - 16px)',
		borderRadius: '0 20px 20px 0',
		paddingLeft: 24,
		paddingRight: 12,
		'&.active': {
			backgroundColor: theme.palette.secondary.main,
			color: `${theme.palette.secondary.contrastText}!important`,
			pointerEvents: 'none',
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {
			marginRight: 16
		}
	}
}));

function NotesSidebarContent(props) {
	const dispatch = useDispatch();
	const labels = useSelector(({ notesApp }) => notesApp.labels.entities);

	const classes = useStyles(props);

	return (
		<div className="p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4">
			<FuseAnimate animation="transition.slideLeftIn" delay={200}>
				<Paper elevation={1} className={clsx(classes.paper, 'rounded-8')}>
					<List>
						<ListItem
							button
							component={NavLinkAdapter}
							to="/apps/notes"
							exact
							activeClassName="active"
							className={classes.listItem}
						>
							<Icon className="list-item-icon text-16" color="action">
								label
							</Icon>
							<ListItemText className="truncate" primary="Notes" disableTypography />
						</ListItem>
						<ListItem
							button
							component={NavLinkAdapter}
							to="/apps/notes/reminders"
							exact
							activeClassName="active"
							className={classes.listItem}
						>
							<Icon className="list-item-icon text-16" color="action">
								notifications
							</Icon>
							<ListItemText className="truncate" primary="Reminders" disableTypography />
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListSubheader>Labels</ListSubheader>
						{Object.entries(labels).map(([key, label]) => (
							<ListItem
								key={label.id}
								button
								component={NavLinkAdapter}
								to={`/apps/notes/labels/${label.handle}/${label.id}`}
								exact
								activeClassName="active"
								className={classes.listItem}
							>
								<Icon className="list-item-icon text-16" color="action">
									label
								</Icon>
								<ListItemText className="truncate" primary={label.name} disableTypography />
							</ListItem>
						))}
						<ListItem
							button
							className={classes.listItem}
							onClick={ev => dispatch(Actions.openLabelsDialog())}
						>
							<Icon className="list-item-icon text-16" color="action">
								edit
							</Icon>
							<ListItemText className="truncate" primary="Edit Labels" disableTypography />
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem
							button
							component={NavLinkAdapter}
							to="/apps/notes/archive"
							activeClassName="active"
							className={classes.listItem}
						>
							<Icon className="list-item-icon text-16" color="action">
								archive
							</Icon>
							<ListItemText className="truncate" primary="Archive" disableTypography />
						</ListItem>
					</List>
				</Paper>
			</FuseAnimate>
		</div>
	);
}

export default NotesSidebarContent;
