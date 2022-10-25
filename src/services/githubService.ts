import { AxiosResponse } from 'axios';
import apiClient from '../apiManager/apiClient';
import { SearchReposResults } from '../interfaces/searchRepos';
import { SearchUsersResults } from '../interfaces/searchUsers';

const searchRepos = (
	searchText: string,
	config?: any
): Promise<AxiosResponse<SearchReposResults>> => {
	const encondedQuery: string = encodeURIComponent(`${searchText} in:name`);

	const searchQuery = `search/repositories?q=${encondedQuery}&sort=stars&order=desc`;

	return apiClient.get(searchQuery, config);
};

function searchUsers(
	searchText: string
): Promise<AxiosResponse<SearchUsersResults>> {
	const encondedQuery: string = encodeURIComponent(
		`${searchText} user:${searchText}`
	);

	const searchQuery = `search/users?q=${encondedQuery}&sort=stars&order=desc`;

	return apiClient.get(searchQuery);
}

function getRepo(id: string) {
	return apiClient.get(`repositories/${id}`);
}

function getProfile(username: string) {
	return apiClient.get(`users/${username}`);
}

export { searchRepos, getRepo, getProfile, searchUsers };
