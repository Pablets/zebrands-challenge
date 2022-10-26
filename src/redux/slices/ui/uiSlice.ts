import { createSlice } from '@reduxjs/toolkit';
import { RootState, store } from '../../store';
import { resultsSlice } from '../results/resultsSlice';
import { uiInitialState } from './uiInitialState';

export const uiSlice = createSlice({
	name: 'uiSlice',
	initialState: uiInitialState,
	reducers: {
		setTheme: (state) => {
			return {
				...state,
				currentTheme: state.currentTheme === 'dark' ? 'light' : 'dark',
			};
		},
	},
});

export const {
	fetchingResults,
	setRepos,
	setUsers,
	resetResultsStore,
	setResultsError,
	resetSearchString,
	setSearchString,
	resetError,
} = resultsSlice.actions;


