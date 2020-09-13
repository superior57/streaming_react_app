import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as Actions from 'app/store/actions';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const languages = [
	{
		id: 'en',
		title: 'English',
		flag: 'us'
	},
	{
		id: 'tr',
		title: 'Turkish',
		flag: 'tr'
	},
	{
		id: 'ar',
		title: 'Arabic',
		flag: 'sa'
	}
];

function LanguageSwitcher(props) {
	const dispatch = useDispatch();

	const theme = useTheme();
	const { i18n } = useTranslation();
	const [menu, setMenu] = useState(null);

	const currentLng = languages.find(lng => lng.id === i18n.language);

	const userMenuClick = event => {
		setMenu(event.currentTarget);
	};

	const userMenuClose = () => {
		setMenu(null);
	};

	function handleLanguageChange(lng) {
		const newLangDir = i18n.dir(lng.id);

		/*
        Change Language
         */
		i18n.changeLanguage(lng.id);

		/*
        If necessary, change theme direction
         */
		if (newLangDir !== theme.direction) {
			dispatch(Actions.setDefaultSettings({ direction: newLangDir }));
		}

		userMenuClose();
	}

	return (
		<>
			<Button className="h-64 w-64" onClick={userMenuClick}>
				<img
					className="mx-4 min-w-20"
					src={`assets/images/flags/${currentLng.flag}.png`}
					alt={currentLng.title}
				/>

				<Typography className="mx-4 font-600">{currentLng.id}</Typography>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				onClose={userMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{languages.map(lng => (
					<MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
						<ListItemIcon className="min-w-40">
							<img className="min-w-20" src={`assets/images/flags/${lng.flag}.png`} alt={lng.title} />
						</ListItemIcon>
						<ListItemText primary={lng.title} />
					</MenuItem>
				))}

				<MenuItem
					component={Link}
					to="/documentation/working-with-fuse-react/multi-language"
					onClick={userMenuClose}
					role="button"
				>
					<ListItemText primary="Learn More" />
				</MenuItem>
			</Popover>
		</>
	);
}

export default LanguageSwitcher;
