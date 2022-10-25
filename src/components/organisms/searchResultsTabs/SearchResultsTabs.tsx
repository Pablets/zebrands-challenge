import React, { FC, useState } from 'react';
import { IRepoData } from '../../../interfaces/searchRepos';
import { IUserData } from '../../../interfaces/searchUsers';
import Tabs from '../tabs/Tabs';
import TabButton from '../../atoms/tabButton/TabButton';

interface SearchResultsTabsProps {
    repos: IRepoData[];
    users?: IUserData[];
}

const SearchResults: FC<SearchResultsTabsProps> = ({ repos, users }) => {
    const [selected, setSelected] = useState<'repos' | 'users'>('repos');

    const setSelectedCallback = (value: 'repos' | 'users') => {
        setSelected(value);
    };

    return (
        <div className="row">
            <div className="col s12">
                <ul className="tabs">
                    <TabButton setSelectedCallback={setSelectedCallback} selected={selected} value="repos">
                        Repositories
                    </TabButton>
                    <TabButton setSelectedCallback={setSelectedCallback} selected={selected} value="users">
                        Users
                    </TabButton>
                </ul>
            </div>
            <Tabs repos={repos} users={users} selected={selected} />
        </div>
    );
};

export default SearchResults;
