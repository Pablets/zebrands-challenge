import React, { useState, useEffect } from 'react';
import { searchRepos, searchUsers } from '../src/services/githubService';
import { GetStaticProps, NextPage } from 'next';
import Heading from '../src/components/atoms/heading/Heading';
import SearchResults from '../src/components/organisms/searchResultsTabs/SearchResultsTabs';
import { useAppSelector } from '../src/hooks/hooks';
import { IUserData } from '../src/interfaces/searchUsers';
import { IRepoData } from '../src/interfaces/searchRepos';
import repositoriesResponse from '../src/mocks/github-services/repositoriesResponse.json';
import usersResponse from '../src/mocks//github-services/usersResponse.json';
import Container from '@mui/material/Container';
import { resultsSelector } from '../src/redux/store';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface SSRProps {
	SSRreposData: IRepoData[];
	SSRusersData: IUserData[];
	SSRSearchString: string;
}

const Home: NextPage<SSRProps> = ({
	SSRreposData,
	SSRusersData,
	SSRSearchString,
}) => {
	const { repos, users, searchString } = resultsSelector();

	console.log('NODE_ENV', process.env.NODE_ENV);

	const [lRepos, setLRepos] = useState<IRepoData[]>();
	const [lUsers, setLUsers] = useState<IUserData[]>();
	const [lSearchString, setLSearchString] = useState<string>();

	useEffect(() => {
		setLRepos(repos);
		setLUsers(users);
		setLSearchString(searchString || SSRSearchString);
	}, [repos, users, searchString, SSRSearchString, SSRreposData, SSRusersData]);

	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12} mt="1rem">
					{lSearchString && (
						<Typography typography="h5" color="GrayText">
							Searching results for: &quot;{lSearchString || SSRSearchString}
							&quot;
						</Typography>
					)}
				</Grid>
				<SearchResults
					repos={lRepos || SSRreposData}
					users={lUsers || SSRusersData}
				/>
			</Grid>
		</Container>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
	if (!process.env?.GITHUB_CLIENT_SECRET || !process.env?.GITHUB_CLIENT_ID) {
		const [a, b, c, ...rest] = repositoriesResponse.items;
		return {
			props: {
				SSRreposData: [a, b, c],
				SSRusersData: usersResponse.items,
				SSRSearchString: 'react',
			},
		};
	}

	const { data: reposData } = await searchRepos('tom');
	const { data: usersData } = await searchUsers('tom');

	return {
		props: {
			SSRreposData: reposData.items,
			SSRusersData: usersData.items,
			SSRSearchString: 'tom',
		},
	};
};
