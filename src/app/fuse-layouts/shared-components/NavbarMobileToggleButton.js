import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import * as Actions from 'app/store/actions';
import React from 'react';
import { useDispatch } from 'react-redux';

function NavbarMobileToggleButton(props) {
	const dispatch = useDispatch();

	return (
		<IconButton
			className={props.className}
			onClick={ev => dispatch(Actions.navbarToggleMobile())}
			color="inherit"
			disableRipple
		>
			{props.children}
		</IconButton>
	);
}

NavbarMobileToggleButton.defaultProps = {
	children: <Icon>menu</Icon>
};

export default NavbarMobileToggleButton;
