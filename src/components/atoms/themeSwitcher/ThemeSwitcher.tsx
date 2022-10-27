import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { setTheme } from 'src/redux/slices/ui/uiSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { IUi } from 'src/redux/slices/ui/uiInitialState';

const ThemeSwitcher = () => {
	const dispatch = useAppDispatch();

	const { currentTheme } = useAppSelector(
		(state: { uiSlice: IUi }) => state.uiSlice
	);

	const handleSwitchCurrentThemeClick = () => {
		dispatch(setTheme());
	};

	return (
		<IconButton onClick={handleSwitchCurrentThemeClick}>
			{currentTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
		</IconButton>
	);
};

export default ThemeSwitcher;
