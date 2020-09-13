import FuseAnimate from '../user/product/node_modules/@fuse/core/FuseAnimate';
import FuseUtils from '../user/product/node_modules/@fuse/utils';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from 'react-table';
import UsersMultiSelectMenu from './UsersMultiSelectMenu';
import * as Actions from './store/actions';

function UsersList(props) {
	const dispatch = useDispatch();
	const contacts = useSelector(({ usersApp }) => usersApp.contacts.entities);
	const selectedContactIds = useSelector(({ usersApp }) => usersApp.contacts.selectedContactIds);
	const searchText = useSelector(({ usersApp }) => usersApp.contacts.searchText);
	const user = useSelector(({ usersApp }) => usersApp.user);

	const [filteredData, setFilteredData] = useState(null);

	useEffect(() => {
		function getFilteredArray(entities, _searchText) {
			const arr = Object.keys(entities).map(id => entities[id]);
			if (_searchText.length === 0) {
				return arr;
			}
			return FuseUtils.filterArrayByString(arr, _searchText);
		}

		if (contacts) {
			setFilteredData(getFilteredArray(contacts, searchText));
		}
	}, [contacts, searchText]);

	if (!filteredData) {
		return null;
	}

	if (filteredData.length === 0) {
		return (
			<div className="flex flex-1 items-center justify-center h-full">
				<Typography color="textSecondary" variant="h5">
					There are no contacts!
				</Typography>
			</div>
		);
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={300}>
			<>
			<Typography variant="h6" className="mx-12 hidden sm:flex">
				Usuários
			</Typography>
			<Typography variant="subtitle1" className="mx-12 hidden sm:flex">
				Lista de Usuários
			</Typography>
			<ReactTable
				className="-striped -highlight h-full sm:rounded-6 overflow-hidden"
				// getTrProps={(state, rowInfo, column) => {
				// 	return {
				// 		className: 'cursor-pointer',
				// 		onClick: (e, handleOriginal) => {
				// 			if (rowInfo) {
				// 				dispatch(Actions.openEditContactDialog(rowInfo.original));
				// 			}
				// 		}
				// 	};
				// }}
				data={filteredData}
				columns={[
					{
						Header: () => (
							<Checkbox
								onClick={event => {
									event.stopPropagation();
								}}
								onChange={event => {
									return event.target.checked
										? dispatch(Actions.selectAllContacts())
										: dispatch(Actions.deSelectAllContacts());
								}}
								checked={
									selectedContactIds.length === Object.keys(contacts).length &&
									selectedContactIds.length > 0
								}
								indeterminate={
									selectedContactIds.length !== Object.keys(contacts).length &&
									selectedContactIds.length > 0
								}
							/>
						),
						accessor: '',
						Cell: row => {
							return (
								<Checkbox
									onClick={event => {
										event.stopPropagation();
									}}
									checked={selectedContactIds.includes(row.value.id)}
									onChange={() => dispatch(Actions.toggleInSelectedContacts(row.value.id))}
								/>
							);
						},
						className: 'justify-center',
						sortable: false,
						width: 64
					},
					// {
					// 	Header: () => selectedContactIds.length > 0 && <UsersMultiSelectMenu />,
					// 	accessor: 'avatar',
					// 	Cell: row => <Avatar className="mx-8" alt={row.original.name} src={row.value} />,
					// 	className: 'justify-center',
					// 	width: 64,
					// 	sortable: false
					// },
					{
						Header: 'First Name',
						accessor: 'name',
						filterable: true,
						className: 'font-bold'
					},
					// {
					// 	Header: 'Last Name',
					// 	accessor: 'lastName',
					// 	filterable: true,
					// 	className: 'font-bold'
					// },
					{
						Header: 'CPF',
						accessor: 'CPF',
						filterable: true
					},
					// {
					// 	Header: 'Company',
					// 	accessor: 'company',
					// 	filterable: true
					// },
					// {
					// 	Header: 'Job Title',
					// 	accessor: 'jobTitle',
					// 	filterable: true
					// },
					{
						Header: 'E-mail',
						accessor: 'email',
						filterable: true
					},
					{
						Header: 'Permissão',
						accessor: 'permission',
						filterable: true
					},
					{
						Header: 'Status',
						accessor: 'status',
						filterable: true
					},
					{
						Header: 'Ação',
						width: 128,
						Cell: row => (
							<div className="flex items-center">
								<IconButton
									onClick={ev => {
										ev.stopPropagation();
										dispatch(Actions.toggleStarredContact(row.original.id));
									}}
								>
									{user.starred && user.starred.includes(row.original.id) ? (
										<Icon>star</Icon>
									) : (
										<Icon>star_border</Icon>
									)}
								</IconButton>
								<IconButton
									onClick={ev => {
										ev.stopPropagation();
										dispatch(Actions.removeContact(row.original.id));
									}}
								>
									<Icon>delete</Icon>
								</IconButton>
							</div>
						)
					}
				]}
				defaultPageSize={10}
				noDataText="No users found"
			/>
			</>
		</FuseAnimate>
	);
}

export default UsersList;
