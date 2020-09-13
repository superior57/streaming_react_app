import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as quickPanelActions from './store/actions';

function QuickPanelToggleButton(props) {
	const dispatch = useDispatch();

	return (
		<IconButton className="w-64 h-64" onClick={ev => dispatch(quickPanelActions.toggleQuickPanel())}>
			{props.children}
		</IconButton>
	);
}

QuickPanelToggleButton.defaultProps = {
	children: <Icon>format_list_bulleted</Icon>
};

export default QuickPanelToggleButton;
