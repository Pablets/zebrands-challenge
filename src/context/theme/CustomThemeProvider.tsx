import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { lightTheme, darkTheme } from '../../themes';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { uiSelector } from 'src/redux/store';

const CustomThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
	const { currentTheme } = uiSelector();

	return (
		<ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
			<CssBaseline />
			<GlobalStyles
				styles={{
					body: {
						// backgroundColor: `rgb(35,35,48)`,
						// background: `linear-gradient(36deg, rgba(35,35,48,1) 0%, rgba(0,0,252,1) 71%, rgba(0,212,255,1) 100%)`,
					},
					'::-webkit-scrollbar-thumb': {
						border: 'none',
						boxShadow: 'none',
						background: 'white',
						borderRadius: '3px',
						minHeight: '1px',
					},
					'::-webkit-scrollbar': {
						background: 'transparent',
						height: '2px',
						width: '5px',
						marginBottom: '2px',
					},
				}}
			/>
			{children}
		</ThemeProvider>
	);
};

export default CustomThemeProvider;
