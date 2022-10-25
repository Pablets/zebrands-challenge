import { IRepoData } from '../../../interfaces/searchRepos';
import { IUserData } from '../../../interfaces/searchUsers';

interface IResults {
	pending: boolean;
	searchString?: string;
	repos?: IRepoData[];
	users?: IUserData[];
	error: string | null;
}

export const resultsInitialState: IResults = {
	pending: false,
	searchString: undefined,
	repos: undefined,
	users: undefined,
	error: null,
};
