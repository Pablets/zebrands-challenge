import { alpha, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Theme {
		gradients: {
			mesh: string;
			glass: string;
			semitransparent: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		gradients?: {
			mesh?: string;
			glass: string;
			semitransparent: string;
		};
	}
}

export const lightTheme = createTheme({
	gradients: {
		mesh: `radial-gradient(at 40% 20%, hsla(28,100%,74%,0.3) 0px, transparent 60%),
radial-gradient(at 80% 0%, hsla(189,100%,56%,0.3) 0px, transparent 60%),
radial-gradient(at 0% 50%, hsla(355,100%,93%,0.3) 0px, transparent 60%),
radial-gradient(at 80% 50%, hsla(340,100%,76%,0.3) 0px, transparent 60%),
radial-gradient(at 0% 100%, hsla(22,100%,77%,0.3) 0px, transparent 60%),
radial-gradient(at 80% 100%, hsla(242,100%,70%,0.3) 0px, transparent 60%),
radial-gradient(at 0% 0%, hsla(343,100%,76%,0.3) 0px, transparent 60%)`,
		glass: `background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 )`,
		semitransparent: `background: rgb(35,35,48);
background: linear-gradient(0deg, rgba(35,35,48,1) 20%, rgba(255,255,255,0) 50%);`,
	},
	palette: {
		mode: 'light',
		primary: {
			main: '#cfd8dc',
		},
		secondary: {
			main: '#007aff',
		},
		background: {
			default: '##fff',
			paper: '##fff',
		},
		// secondary: {
		// 	// main: '#fb8c00',
		// 	main: '#455a64',
		// },
		// background: {
		// 	default: '#121212', // '#1a2035', // '#171827',
		// 	paper: '#202940',
		// },
		// info: {
		// 	main: '#2196f3',
		// },
		// text: {
		// 	primary: '#173e5e',
		// 	secondary: '#616161',
		// },
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.4,
	},
	components: {
		MuiTooltip: {
			defaultProps: {
				arrow: false,
			},
		},
		MuiIcon: {
			defaultProps: {
				color: 'secondary',
			},
			styleOverrides: {
				root: {
					color: 'red',
					backgroundColor: 'white',
				},
			},
		},
		MuiIconButton: {
			defaultProps: {
				color: 'secondary',
			},
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.contrastText,
					'&:hover': {
						backgroundColor: alpha(theme.palette.primary.contrastText, 0.2),
					},
				}),
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.contrastText,
				}),
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.palette.primary.main,
					border: 'none',
					boxShadow: 'none',
					paper: {
						backgroundColor: theme.palette.primary.main,
					},
				}),
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: ({ theme }) => ({
					// backgroundColor: theme.palette.background.paper,
					// borderRadius: '5px',
					// border: 'none',
					// background: `rgba( 255, 255, 255, 0.1 )`,
					// backdropFilter: `blur( 10px )`,
					// borderRadius: '10px',
					border: `1px solid rgba( 255, 255, 255, 0.01 )`,
					overflow: 'hidden',
					'&.MuiDrawer-paper': {
						// boxShadow: theme.shadows[0],
					},
				}),
			},
		},
		MuiDrawer: {
			styleOverrides: {
				root: ({ theme }) => ({
					border: 'none',
				}),
			},
		},
		MuiFab: {
			styleOverrides: {
				root: ({ theme }) => ({
					border: 'none',
					boxShadow: theme.shadows[19],
					backgroundColor: theme.palette.primary.main,
					'&.MuiSpeedDialAction-fab': {
						backgroundColor: theme.palette.primary.main,
					},
					'&:hover': {
						backgroundColor: alpha(theme.palette.primary.contrastText, 0.2),
					},
				}),
			},
		},
	},
});
