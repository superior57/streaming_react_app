import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseUtils from '@fuse/utils';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import * as Actions from 'app/store/actions';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FuseNavItem from '../FuseNavItem';

const useStyles = makeStyles(theme => ({
	item: props => ({
		height: 40,
		width: 'calc(100% - 16px)',
		borderRadius: '0 20px 20px 0',
		paddingRight: 12,
		paddingLeft: props.itemPadding > 80 ? 80 : props.itemPadding,
		'&.active > .list-subheader-text': {
			fontWeight: 700
		}
	})
}));

function FuseNavVerticalGroup(props) {
	const userRole = useSelector(({ auth }) => auth.user.role);
	const dispatch = useDispatch();
	const { item, nestedLevel } = props;
	const classes = useStyles({
		itemPadding: nestedLevel > 0 ? 40 + nestedLevel * 16 : 24
	});
	const { t } = useTranslation('navigation');

	if (!FuseUtils.hasPermission(item.auth, userRole)) {
		return null;
	}

	return (
		<>
			<ListSubheader
				disableSticky
				className={clsx(classes.item, 'list-subheader flex items-center', !item.url && 'cursor-default')}
				onClick={ev => dispatch(Actions.navbarCloseMobile())}
				component={item.url ? NavLinkAdapter : 'li'}
				to={item.url}
				role="button"
			>
				<span className="list-subheader-text uppercase text-12">
					{item.translate ? t(item.translate) : item.title}
				</span>
			</ListSubheader>

			{item.children && (
				<>
					{item.children.map(_item => (
						<FuseNavItem
							key={_item.id}
							type={`vertical-${_item.type}`}
							item={_item}
							nestedLevel={nestedLevel}
						/>
					))}
				</>
			)}
		</>
	);
}

FuseNavVerticalGroup.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
		children: PropTypes.array
	})
};

FuseNavVerticalGroup.defaultProps = {};

const NavVerticalGroup = withRouter(React.memo(FuseNavVerticalGroup));

export default NavVerticalGroup;
