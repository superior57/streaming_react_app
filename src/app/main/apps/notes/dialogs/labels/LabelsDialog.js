import Dialog from '@material-ui/core/Dialog';
import * as Actions from 'app/main/apps/notes/store/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LabelsForm from './LabelsForm';

function LabelsDialog(props) {
	const dispatch = useDispatch();
	const labelsDialogOpen = useSelector(({ notesApp }) => notesApp.labels.labelsDialogOpen);

	return (
		<Dialog
			classes={{
				paper: 'w-full max-w-320 p-16 m-24 rounded-8'
			}}
			onClose={ev => dispatch(Actions.closeLabelsDialog())}
			open={labelsDialogOpen}
		>
			<LabelsForm />
		</Dialog>
	);
}

export default LabelsDialog;
