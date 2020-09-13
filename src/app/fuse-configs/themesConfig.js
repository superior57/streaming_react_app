import { fuseDark, skyBlue } from '@fuse/colors';
import { lightBlue, red } from '@material-ui/core/colors';

const themesConfig = {
	default: {
		palette: {
			type: 'light',
			primary: fuseDark,
			secondary: {
				light: skyBlue[100],
				main: skyBlue[500],
				dark: skyBlue[900]
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7'
			},
			
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	blueDark: {
		palette: {
			type: 'dark',
			primary: {
				light: '#263741',
				main: '#263741',
				dark: '#263741'
			},
			secondary: {
				light: skyBlue[100],
				main: skyBlue[500],
				dark: skyBlue[900]
			},
			background: {
				paper: '#263741',
				default: '#263741'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	blueDefault: {
		palette: {
			type: 'dark',
			primary: {
				light: '#263741',
				main: '#263741',
				dark: '#263741'
			},
			secondary: {
				light: skyBlue[100],
				main: skyBlue[500],
				dark: skyBlue[900]
			},
			background: {
				paper: '#376d8d',
				default: '#376d8d'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	blueLight: {
		palette: {
			type: 'dark',
			primary: {
				light: '#263741',
				main: '#263741',
				dark: '#263741'
			},
			secondary: {
				light: skyBlue[100],
				main: skyBlue[500],
				dark: skyBlue[900]
			},
			background: {
				paper: '#0098f4',
				default: '#0098f4'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	legacy: {
		palette: {
			type: 'light',
			primary: fuseDark,
			secondary: {
				light: lightBlue[400],
				main: lightBlue[600],
				dark: lightBlue[700]
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	sunset: {
		palette: {
			type: 'light',
			primary: {
				light: '#FF908B',
				main: '#D0605E',
				dark: '#9B3134'
			},
			secondary: {
				light: '#C76A1D',
				main: '#FF994C',
				dark: '#FFCA7B',
				contrastText: '#FFF'
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	greeny: {
		palette: {
			type: 'light',
			primary: {
				light: '#6CABD4',
				main: '#387CA3',
				dark: '#005074'
			},
			secondary: {
				light: '#89F6CF',
				main: '#55C39E',
				dark: '#159270',
				contrastText: '#FFF'
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	beach: {
		palette: {
			type: 'light',
			primary: {
				light: '#C4D8DD',
				main: '#93A7AB',
				dark: '#65787C',
				contrastText: '#FFF'
			},
			secondary: {
				light: '#FFB281',
				main: '#F18153',
				dark: '#BA5228',
				contrastText: '#FFF'
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7'
			}
		}
	},
	tech: {
		palette: {
			type: 'light',
			primary: {
				light: '#87EFFF',
				main: '#4DBCE9',
				dark: '#008CB7',
				contrastText: '#FFF'
			},
			secondary: {
				light: '#FFFF83',
				main: '#D1E751',
				dark: '#9DB516'
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7'
			}
		}
	},
	sweetHues: {
		palette: {
			type: 'light',
			primary: {
				light: '#D5C1EB',
				main: '#A391B9',
				dark: '#746389',
				contrastText: '#FFF'
			},
			secondary: {
				light: '#90AFD4',
				main: '#6080A3',
				dark: '#325474'
			},
			background: {
				paper: '#FFFFFF',
				default: '#F7F7F7'
			}
		}
	},
	defaultDark: {
		palette: {
			type: 'dark',
			primary: fuseDark,
			secondary: {
				light: skyBlue[100],
				main: skyBlue[500],
				dark: skyBlue[900]
			},
			background: {
				paper: '#1E2125',
				default: '#121212'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	},
	deepOcean: {
		palette: {
			type: 'dark',
			primary: {
				light: '#8F53E7',
				main: '#5A24B4',
				dark: '#1E0083'
			},
			secondary: {
				light: '#FF61FF',
				main: '#FE00E9',
				dark: '#C600B6',
				contrastText: '#FFF'
			},
			background: {
				paper: '#1E2125',
				default: '#121212'
			}
		}
	},
	slate: {
		palette: {
			type: 'dark',
			primary: {
				light: '#86FFF7',
				main: '#4ECDC4',
				dark: '#009B94'
			},
			secondary: {
				light: '#FF9D99',
				main: '#FF6B6B',
				dark: '#C73840',
				contrastText: '#FFF'
			},
			background: {
				paper: '#1E2125',
				default: '#121212'
			}
		}
	}
};

export default themesConfig;
