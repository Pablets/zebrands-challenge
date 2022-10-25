import React from 'react';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Collection from '../../molecules/collection/Collection';
import Repository from '../repository/Repository';
import User from '../user/User';
import { StyledCol, StyledTabContainer, StyledTabs } from './Tabs.styled';

const Tabs = ({ repos, users, selected }) => {
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
