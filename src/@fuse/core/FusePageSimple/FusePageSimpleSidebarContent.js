import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

function FusePageSimpleSidebarContent(props) {
	const mainThemeDark = useSelector(({ fuse }) => fuse.settings.mainThemeDark);

	const { classes } = props;

	return (
		<FuseScrollbars enable={props.innerScroll}>
			{props.header && (
				<ThemeProvider theme={mainThemeDark}>
					<div
						className={clsx(
							classes.sidebarHeader,
							props.variant,
							props.sidebarInner && classes.sidebarHeaderInnerSidebar
						)}
					>
						{props.header}
					</div>
				</ThemeProvider>
			)}

			{props.content && <div className={classes.sidebarContent}>{props.content}</div>}
		</FuseScrollbars>
	);
}

export default FusePageSimpleSidebarContent;
