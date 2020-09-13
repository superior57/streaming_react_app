import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import React from 'react';
import reducer from '../store/reducers';
import OrdersHeader from './UsersHeader';
import OrdersTable from './UsersTable';

function Users() {
	return (
		<FusePageCarded
			// classes={{
			// 	content: 'flex',
			// 	header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			// }}
			header={<OrdersHeader />}
			content={<OrdersTable />}
			innerScroll
		/>
	);
}

export default withReducer('UsersApp', reducer)(Users);