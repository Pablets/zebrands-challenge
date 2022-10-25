import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRepoData, SearchReposResults } from '../../../interfaces/searchRepos';
import { IUserData, SearchUsersResults } from '../../../interfaces/searchUsers';

import type { RootState } from '../../store';
import { resultsInitialState } from './resultsInitialState';

export const resultsSlice = createSlice({
	name: 'resultsSlices',
	initialState: resultsInitialState,
	reducers: {
		fetchingResults: (state) => {
			return { ...state, pending: true };
		},
		resetSearchString: (state) => {
			return { ...state, searchString: undefined };
		},
		resetError: (state) => {
			return { ...state, error: null };
		},
		setRepos: (state, action: PayloadAction<{ repos: IRepoData[] }>) => {
			return { ...state, pending: false, repos: action.payload.repos };
		},
		setSearchString: (
			state,
			action: PayloadAction<{ searchString: string }>
		) => {
			return {
				...state,
				pending: false,
				searchString: action.payload.searchString,
			};
		},
		setUsers: (
			state,
			action: PayloadAction<{ users: IUserData[] | undefined }>
		) => {
			return { ...state, pending: false, users: action.payload.users };
		},
		setResultsError: (state, action: PayloadAction<{ error: string }>) => {
			return { ...state, pending: false, error: action.payload.error };
		},
		resetResultsStore: () => {
			return resultsInitialState;
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

export const selectResults = (state: RootState) => state.resultsSlice;
