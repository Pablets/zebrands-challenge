import Image from 'next/image';
import React, { FC } from 'react';
import CodeBranchIcon from '../../atoms/icons/CodeBranchIcon';
import Heading from '../../atoms/heading/Heading';
import StarIcon from '../../atoms/icons/StarIcon';
import FlexContainer from '../../atoms/flexContainer/FlexContainer';
import Badge from '../../molecules/counter/Badge';
import { IRepoData } from '../../../interfaces/searchRepos';
import CollectionItem from '../../molecules/collectionItem/CollectionItem';
import {
	StyledImageContainer,
	StyledContentContainer,
	StyledContainer,
} from './Repository.styled';
import TextLink from '../../molecules/textLink/TextLink';

const Repository: FC<{ repo: IRepoData }> = ({ repo }) => {
	return (
		<CollectionItem>
			<StyledImageContainer className="col s2">
				<FlexContainer
					direction="row"
					alignItems="center"
					justifyContent="center"
					width="50px"
					height="50px"
				>
					<Image
						src={`${repo.owner.avatar_url}`}
						alt=""
						width={50}
						height={50}
						className="circle responsive-img"
					/>
				</FlexContainer>
			</StyledImageContainer>
			<StyledContentContainer className="col s10">
				<FlexContainer
					direction="row"
					alignItems="center"
					justifyContent="flex-start"
					customStyles={{
						marginLeft: '10px',
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}
					height={'50px'}
				>
					<TextLink
						to={`https://github.com/${repo.owner.login}/${repo.name}`} /* href="/repo/[id]" as={`/repo/${repo.id}`} */
					>
						<Heading size={'h5'}>{repo.name}</Heading>
					</TextLink>
				</FlexContainer>
			</StyledContentContainer>
			<div className="row">
				<div className="col s12">
					<div style={{ margin: '5px' }}>
						<p>{repo.description}</p>
					</div>
				</div>
				<div className="col s12">
					<FlexContainer
						direction="row"
						justifyContent={'flex-start'}
						alignItems={'center'}
					>
						<Badge>{repo.language}</Badge>
						<Badge icon={<StarIcon />} textOrientation={'right'}>
							{repo.stargazers_count.toString()}
						</Badge>
						<Badge icon={<CodeBranchIcon />} textOrientation={'right'}>
							{repo.forks_count.toString()}
						</Badge>
					</FlexContainer>
				</div>
			</div>
		</CollectionItem>
	);
};

export default Repository;
