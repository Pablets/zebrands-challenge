import { AxiosError, AxiosResponse } from 'axios';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { SearchReposResults } from 'src/interfaces/searchRepos';
import { SearchUsersResults } from 'src/interfaces/searchUsers';
import {
	getProfile,
	searchRepos,
	searchUsers,
} from '../../services/githubService';
import {
	fetchingResults,
	setResultsError,
	setRepos,
	setUsers,
	selectResults,
	resetSearchString,
} from '../slices/results/resultsSlice';

function* fetchData() {
	try {
		const { searchString } = yield select(selectResults);

		yield put(fetchingResults());

		const repoResults: AxiosResponse<SearchReposResults> = yield call(
			searchRepos,
			searchString
		);
		const usersResults: AxiosResponse<SearchUsersResults> = yield call(
			searchUsers,
			searchString
		);
		// const usersResults = yield call(getProfile, searchString);

		yield put(setRepos({ repos: repoResults.data.items }));
		yield put(setUsers({ users: usersResults.data.items }));
	} catch (error) {
		console.log(error);
		if (error instanceof AxiosError) {
			const axiosError: AxiosError = error;
			if (axiosError.response?.status! === 422) {
				console.log('usuarios no encontrados');
				yield put(setUsers({ users: undefined }));
				yield put(resetSearchString());
			} else {
				yield put(
					setResultsError({ error: error?.message || 'Generic error' })
				);
			}
		} else {
			yield put(setResultsError({ error: 'Generic error' }));
		}
	}
}

function* loanSaga() {
	yield takeLatest('FETCH_DATA', fetchData);
}

export default loanSaga;
