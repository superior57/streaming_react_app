import {
	defaultSettings,
	defaultThemeOptions,
	defaultThemes,
	extendThemeWithMixins,
	getParsedQuerySettings,
	mainThemeVariations,
	mustHaveThemeOptions
} from '@fuse/default-settings';
import _ from '@lodash';
import { createMuiTheme } from '@material-ui/core/styles';
import FuseSettingsConfig from 'app/fuse-configs/settingsConfig';
import FuseThemesConfig from 'app/fuse-configs/themesConfig';
import FuseLayoutConfigs from 'app/fuse-layouts/FuseLayoutConfigs';
import * as Actions from 'app/store/actions/fuse';

const themesObjRaw = Object.keys(FuseThemesConfig).length !== 0 ? FuseThemesConfig : defaultThemes;
const initialSettings = getInitialSettings();
const initialThemes = getInitialThemes();

const initialState = {
	initial: initialSettings,
	defaults: _.merge({}, initialSettings),
	current: _.merge({}, initialSettings),
	themes: initialThemes,
	...getThemeOptions(initialThemes, initialSettings)
};

const settings = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_SETTINGS: {
			const current = generateSettings(state.defaults, action.value);
			const themes =
				current.theme.main !== state.current.theme.main
					? { ...state.themes, ...updateMainThemeVariations(current.theme.main, state.themes) }
					: state.themes;
			return {
				...state,
				current,
				themes,
				...getThemeOptions(themes, current)
			};
		}
		case Actions.SET_INITIAL_SETTINGS: {
			return _.merge({}, initialState);
		}
		case Actions.SET_DEFAULT_SETTINGS: {
			const defaults = generateSettings(state.defaults, action.value);
			let themes =
				defaults.theme.main !== state.defaults.theme.main
					? { ...state.themes, ...updateMainThemeVariations(defaults.theme.main, state.themes) }
					: state.themes;
			themes =
				defaults.direction !== state.defaults.direction
					? updateThemeDirections(themes, defaults.direction)
					: themes;
			return {
				...state,
				defaults: _.merge({}, defaults),
				current: _.merge({}, defaults),
				themes,
				...getThemeOptions(themes, defaults)
			};
		}
		case Actions.RESET_DEFAULT_SETTINGS: {
			const themes = {
				...state.themes,
				...updateMainThemeVariations(state.defaults.theme.main, state.themes)
			};
			return {
				...state,
				defaults: _.merge({}, state.defaults),
				current: _.merge({}, state.defaults),
				themes,
				...getThemeOptions(themes, state.defaults)
			};
		}
		default: {
			return state;
		}
	}
};

export default settings;

/**
 * SETTINGS
 */
function getInitialSettings() {
	const defaultLayoutStyle =
		FuseSettingsConfig.layout && FuseSettingsConfig.layout.style ? FuseSettingsConfig.layout.style : 'layout1';
	const layout = {
		style: defaultLayoutStyle,
		config: FuseLayoutConfigs[defaultLayoutStyle].defaults
	};
	return _.merge({}, defaultSettings, { layout }, FuseSettingsConfig, getParsedQuerySettings());
}

/**
 * THEMES
 */
function getInitialThemes() {
	const { direction } = initialSettings;

	const themes = Object.assign(
		{},
		...Object.entries(themesObjRaw).map(([key, value]) => {
			const muiTheme = _.merge({}, defaultThemeOptions, value, mustHaveThemeOptions);
			return {
				[key]: createMuiTheme(
					_.merge({}, muiTheme, {
						mixins: extendThemeWithMixins(muiTheme),
						direction
					})
				)
			};
		})
	);

	return {
		...themes,
		...mainThemeVariations({
			...themesObjRaw[initialSettings.theme.main],
			direction
		})
	};
}

function updateMainThemeVariations(mainTheme, themes) {
	return mainThemeVariations({
		...themesObjRaw[mainTheme],
		direction: themes[mainTheme].direction
	});
}

function getThemeOptions(_themes, _settings) {
	return {
		mainTheme: _themes[_settings.theme.main],
		navbarTheme: _themes[_settings.theme.navbar],
		toolbarTheme: _themes[_settings.theme.toolbar],
		footerTheme: _themes[_settings.theme.footer],
		...updateMainThemeVariations(_settings.theme.main, _themes)
	};
}

function updateThemeDirections(themes, direction) {
	const response = {};
	Object.entries(themes).forEach(([key, value]) => {
		response[key] = { ...value, direction };
	});
	return response;
}

export function generateSettings(_defaultSettings, _newSettings) {
	return _.merge(
		{},
		_defaultSettings,
		_newSettings && _newSettings.layout && _newSettings.layout.style
			? { layout: { config: FuseLayoutConfigs[_newSettings.layout.style].defaults } }
			: {},
		_newSettings
	);
}
