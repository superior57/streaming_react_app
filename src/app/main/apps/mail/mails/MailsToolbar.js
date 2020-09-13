import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions/index';

function MailToolbar(props) {
	const dispatch = useDispatch();
	const selectedMailIds = useSelector(({ mailApp }) => mailApp.mails.selectedMailIds);
	const mails = useSelector(({ mailApp }) => mailApp.mails.entities);
	const labels = useSelector(({ mailApp }) => mailApp.labels);
	const folders = useSelector(({ mailApp }) => mailApp.folders);

	const [menu, setMenu] = useState({
		selectMenu: null,
		foldersMenu: null,
		labelsMenu: null
	});

	function handleMenuOpen(event, _menu) {
		setMenu({
			..._menu,
			[_menu]: event.currentTarget
		});
	}

	function handleMenuClose(event, _menu) {
		setMenu({
			..._menu,
			[_menu]: null
		});
	}

	function handleCheckChange(event) {
		return event.target.checked ? dispatch(Actions.selectAllMails()) : dispatch(Actions.deselectAllMails());
	}

	return (
		<div className="flex flex-1 items-center sm:px-8">
			<Checkbox
				onChange={handleCheckChange}
				checked={selectedMailIds.length === Object.keys(mails).length && selectedMailIds.length > 0}
				indeterminate={selectedMailIds.length !== Object.keys(mails).length && selectedMailIds.length > 0}
			/>

			<IconButton
				className=""
				size="small"
				aria-label="More"
				aria-owns={menu.select ? 'select-menu' : null}
				aria-haspopup="true"
				onClick={ev => handleMenuOpen(ev, 'select')}
			>
				<Icon>arrow_drop_down</Icon>
			</IconButton>

			<Menu
				id="select-menu"
				anchorEl={menu.select}
				open={Boolean(menu.select)}
				onClose={ev => handleMenuClose(ev, 'select')}
			>
				<MenuItem
					onClick={ev => {
						dispatch(Actions.selectAllMails());
						handleMenuClose(ev, 'select');
					}}
				>
					All
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(Actions.deselectAllMails());
						handleMenuClose(ev, 'select');
					}}
				>
					None
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(Actions.selectMailsByParameter('read', true));
						handleMenuClose(ev, 'select');
					}}
				>
					Read
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(Actions.selectMailsByParameter('read', false));
						handleMenuClose(ev, 'select');
					}}
				>
					Unread
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(Actions.selectMailsByParameter('starred', true));
						handleMenuClose(ev, 'select');
					}}
				>
					Starred
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(Actions.selectMailsByParameter('starred', false));
						handleMenuClose(ev, 'select');
					}}
				>
					Unstarred
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(Actions.selectMailsByParameter('important', true));
						handleMenuClose(ev, 'select');
					}}
				>
					Important
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(Actions.selectMailsByParameter('important', false));
						handleMenuClose(ev, 'select');
					}}
				>
					Unimportant
				</MenuItem>
			</Menu>

			{selectedMailIds.length > 0 && (
				<>
					<div className="border-r-1 h-48 w-1 mx-12 my-0" />

					<IconButton onClick={ev => dispatch(Actions.setFolderOnSelectedMails(4))} aria-label="Delete">
						<Icon>delete</Icon>
					</IconButton>

					<IconButton
						aria-label="More"
						aria-owns={menu.folders ? 'folders-menu' : null}
						aria-haspopup="true"
						onClick={ev => handleMenuOpen(ev, 'folders')}
					>
						<Icon>folder</Icon>
					</IconButton>

					<Menu
						id="folders-menu"
						anchorEl={menu.folders}
						open={Boolean(menu.folders)}
						onClose={ev => handleMenuClose(ev, 'folders')}
					>
						{folders.length > 0 &&
							folders.map(folder => (
								<MenuItem
									onClick={ev => {
										dispatch(Actions.setFolderOnSelectedMails(folder.id));
										handleMenuClose(ev, 'folders');
									}}
									key={folder.id}
								>
									{folder.title}
								</MenuItem>
							))}
					</Menu>

					<IconButton
						aria-label="More"
						aria-owns={menu.labels ? 'labels-menu' : null}
						aria-haspopup="true"
						onClick={ev => handleMenuOpen(ev, 'labels')}
					>
						<Icon>label</Icon>
					</IconButton>

					<Menu
						id="folders-menu"
						anchorEl={menu.labels}
						open={Boolean(menu.labels)}
						onClose={ev => handleMenuClose(ev, 'labels')}
					>
						{labels.length > 0 &&
							labels.map(label => (
								<MenuItem
									onClick={ev => {
										dispatch(Actions.toggleLabelOnSelectedMails(label.id));
										handleMenuClose(ev, 'labels');
									}}
									key={label.id}
								>
									{label.title}
								</MenuItem>
							))}
					</Menu>
				</>
			)}
		</div>
	);
}

export default MailToolbar;
