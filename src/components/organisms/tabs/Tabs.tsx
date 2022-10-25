import React, { FC } from 'react';
import { IRepoData } from 'src/interfaces/searchRepos';
import { IUserData } from 'src/interfaces/searchUsers';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Collection from '../../molecules/collection/Collection';
import Repository from '../repository/Repository';
import User from '../user/User';
import { StyledCol, StyledTabContainer, StyledTabs } from './Tabs.styled';

interface TabsProps {
	repos: IRepoData[];
	users?: IUserData[];
	selected: 'users' | 'repos';
}

const Tabs: FC<TabsProps> = ({ repos, users, selected }) => {
	return (
		<StyledTabs>
			<StyledTabContainer className="row" active={selected === 'repos'}>
				<StyledCol className="col s6">
					{repos?.length ? (
						<Collection>
							{repos.map((repository) => {
								return <Repository key={repository.id} repo={repository} />;
							})}
						</Collection>
					) : (
						<Paragraph>No repositories found</Paragraph>
					)}
				</StyledCol>
				<StyledCol className="col s6">
					{users?.length ? (
						<Collection>
							{users.map((user) => {
								return <User key={user.id} user={user} />;
							})}
						</Collection>
					) : (
						<Paragraph>No users founds</Paragraph>
					)}
				</StyledCol>
			</StyledTabContainer>
		</StyledTabs>
	);
};

export default Tabs;
