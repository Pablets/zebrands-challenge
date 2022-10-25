import Image from 'next/image';
import React, { FC } from 'react';
import FlexContainer from '../../atoms/flexContainer/FlexContainer';
import Heading from '../../atoms/heading/Heading';
import { IUserData } from '../../../interfaces/searchUsers';
import CollectionItem from '../../molecules/collectionItem/CollectionItem';
import { StyledContentContainer, StyledImageContainer } from '../repository/Repository.styled';
import TextLink from '../../molecules/textLink/TextLink';

interface UserProps {
    user: IUserData;
}

const User: FC<UserProps> = ({ user }) => {
    return (
        <CollectionItem>
            <StyledImageContainer className="col s2">
                <FlexContainer direction="row" alignItems="center" justifyContent="center">
                    <Image src={`${user.avatar_url}`} alt="" className="circle responsive-img" width={50} height={50} />
                </FlexContainer>
            </StyledImageContainer>
            <StyledContentContainer className="col s10">
                <FlexContainer
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    customStyles={{
                        // display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    <TextLink to={`https://github.com/${user.login}`} /* as={`/repo/${user.id}` */>
                        <Heading size={'h4'}>{user.login}</Heading>
                    </TextLink>
                </FlexContainer>
            </StyledContentContainer>
        </CollectionItem>
    );
};

export default User;
