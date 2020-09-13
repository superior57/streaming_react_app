import Dialog from '@material-ui/core/Dialog';
import * as Actions from 'app/store/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function FuseDialog(props) {
	const dispatch = useDispatch();
	const state = useSelector(({ fuse }) => fuse.dialog.state);
	const options = useSelector(({ fuse }) => fuse.dialog.options);

	return (
		<Dialog
			open={state}
			onClose={ev => dispatch(Actions.closeDialog())}
			aria-labelledby="fuse-dialog-title"
			{...options}
		/>
	);
}

export default FuseDialog;
