import FuseSearch from '@fuse/core/FuseSearch';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/chatPanel/ChatPanelToggleButton';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import LanguageSwitcher from '../../shared-components/LanguageSwitcher';

const useStyles = makeStyles(theme => ({
	separator: {
		width: 1,
		height: 64,
		backgroundColor: theme.palette.divider
	}
}));

function ToolbarLayout3(props) {
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);

	const classes = useStyles(props);

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className="flex relative z-10"
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.default }}
			>
				<Toolbar className="container p-0 lg:px-24">
					{config.navbar.display && (
						<Hidden lgUp>
							<NavbarMobileToggleButton className="w-64 h-64 p-0" />
							<div className={classes.separator} />
						</Hidden>
					)}

					<Hidden mdDown>
						<div className={clsx('flex flex-shrink-0 items-center')}>
							<Logo />
						</div>
					</Hidden>

					<div className="flex flex-1">
						<Hidden xsDown>
							<FuseSearch className="mx-16 lg:mx-24" variant="basic" />
						</Hidden>
					</div>

					<div className="flex">
						<Hidden smUp>
							<FuseSearch />
							<div className={classes.separator} />
						</Hidden>

						<UserMenu />

						<Hidden lgUp>
							<div className={classes.separator} />

							<ChatPanelToggleButton />
						</Hidden>

						<div className={classes.separator} />

						<LanguageSwitcher />

						<div className={classes.separator} />

						<QuickPanelToggleButton />

						<Hidden mdDown>
							<div className={classes.separator} />
						</Hidden>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default ToolbarLayout3;
