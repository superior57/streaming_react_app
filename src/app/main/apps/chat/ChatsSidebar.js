import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseUtils from '@fuse/utils';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import StatusIcon from './StatusIcon';
import * as Actions from './store/actions';

const statusArr = [
	{
		title: 'Online',
		value: 'online'
	},
	{
		title: 'Away',
		value: 'away'
	},
	{
		title: 'Do not disturb',
		value: 'do-not-disturb'
	},
	{
		title: 'Offline',
		value: 'offline'
	}
];

function ChatsSidebar(props) {
	const dispatch = useDispatch();
	const contacts = useSelector(({ chatApp }) => chatApp.contacts.entities);
	const user = useSelector(({ chatApp }) => chatApp.user);

	const [searchText, setSearchText] = useState('');
	const [statusMenuEl, setStatusMenuEl] = useState(null);
	const [moreMenuEl, setMoreMenuEl] = useState(null);

	function handleMoreMenuClick(event) {
		setMoreMenuEl(event.currentTarget);
	}

	function handleMoreMenuClose(event) {
		setMoreMenuEl(null);
	}

	function handleStatusMenuClick(event) {
		event.preventDefault();
		event.stopPropagation();
		setStatusMenuEl(event.currentTarget);
	}

	function handleStatusSelect(event, status) {
		event.preventDefault();
		event.stopPropagation();
		dispatch(
			Actions.updateUserData({
				...user,
				status
			})
		);
		setStatusMenuEl(null);
	}

	function handleStatusClose(event) {
		event.preventDefault();
		event.stopPropagation();
		setStatusMenuEl(null);
	}

	function handleSearchText(event) {
		setSearchText(event.target.value);
	}

	return (
		<div className="flex flex-col flex-auto h-full">
			<AppBar position="static" color="default" elevation={1} className="">
				<Toolbar className="flex justify-between items-center px-4">
					{user && (
						<div
							className="relative w-40 h-40 p-0 mx-12 cursor-pointer"
							onClick={() => dispatch(Actions.openUserSidebar())}
							onKeyDown={() => dispatch(Actions.openUserSidebar())}
							role="button"
							tabIndex={0}
						>
							<Avatar src={user.avatar} alt={user.name} className="w-40 h-40">
								{!user.avatar || user.avatar === '' ? user.name[0] : ''}
							</Avatar>

							<div
								className="absolute right-0 bottom-0 -m-4 z-10 cursor-pointer"
								aria-owns={statusMenuEl ? 'switch-menu' : null}
								aria-haspopup="true"
								onClick={handleStatusMenuClick}
								onKeyDown={handleStatusMenuClick}
								role="button"
								tabIndex={0}
							>
								<StatusIcon status={user.status} />
							</div>

							<Menu
								id="status-switch"
								anchorEl={statusMenuEl}
								open={Boolean(statusMenuEl)}
								onClose={handleStatusClose}
							>
								{statusArr.map(status => (
									<MenuItem onClick={ev => handleStatusSelect(ev, status.value)} key={status.value}>
										<ListItemIcon className="min-w-40">
											<StatusIcon status={status.value} />
										</ListItemIcon>
										<ListItemText primary={status.title} />
									</MenuItem>
								))}
							</Menu>
						</div>
					)}

					<div>
						<IconButton
							aria-owns={moreMenuEl ? 'chats-more-menu' : null}
							aria-haspopup="true"
							onClick={handleMoreMenuClick}
						>
							<Icon>more_vert</Icon>
						</IconButton>
						<Menu
							id="chats-more-menu"
							anchorEl={moreMenuEl}
							open={Boolean(moreMenuEl)}
							onClose={handleMoreMenuClose}
						>
							<MenuItem onClick={handleMoreMenuClose}>Profile</MenuItem>
							<MenuItem onClick={handleMoreMenuClose}>Logout</MenuItem>
						</Menu>
					</div>
				</Toolbar>
				{useMemo(
					() => (
						<Toolbar className="px-16">
							<Paper className="flex p-4 items-center w-full px-8 py-4 rounded-8" elevation={1}>
								<Icon color="action">search</Icon>

								<Input
									placeholder="Search or start new chat"
									className="flex flex-1 px-8"
									disableUnderline
									fullWidth
									value={searchText}
									inputProps={{
										'aria-label': 'Search'
									}}
									onChange={handleSearchText}
								/>
							</Paper>
						</Toolbar>
					),
					[searchText]
				)}
			</AppBar>

			<FuseScrollbars className="overflow-y-auto flex-1">
				<List className="w-full">
					{useMemo(() => {
						function getFilteredArray(arr, _searchText) {
							if (_searchText.length === 0) {
								return arr;
							}
							return FuseUtils.filterArrayByString(arr, _searchText);
						}

						const chatListContacts =
							contacts.length > 0 && user && user.chatList
								? user.chatList.map(_chat => ({
										..._chat,
										...contacts.find(_contact => _contact.id === _chat.contactId)
								  }))
								: [];
						const contactsArr = getFilteredArray([...contacts], searchText);
						const chatListArr = getFilteredArray([...chatListContacts], searchText);

						return (
							<>
								<FuseAnimateGroup
									enter={{
										animation: 'transition.expandIn'
									}}
									className="flex flex-col flex-shrink-0"
								>
									{chatListArr.length > 0 && (
										<Typography className="font-300 text-20 px-16 py-24" color="secondary">
											Chats
										</Typography>
									)}

									{chatListArr.map(contact => (
										<ContactListItem
											key={contact.id}
											contact={contact}
											onContactClick={contactId => dispatch(Actions.getChat(contactId))}
										/>
									))}

									{contactsArr.length > 0 && (
										<Typography className="font-300 text-20 px-16 py-24" color="secondary">
											Contacts
										</Typography>
									)}

									{contactsArr.map(contact => (
										<ContactListItem
											key={contact.id}
											contact={contact}
											onContactClick={contactId => dispatch(Actions.getChat(contactId))}
										/>
									))}
								</FuseAnimateGroup>
							</>
						);
					}, [contacts, user, searchText, dispatch])}
				</List>
			</FuseScrollbars>
		</div>
	);
}

export default ChatsSidebar;
