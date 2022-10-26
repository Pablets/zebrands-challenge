import Image from 'next/image';
import React, { FC } from 'react';
import CodeBranchIcon from '../../atoms/icons/CodeBranchIcon';
import Heading from '../../atoms/heading/Heading';
import StarIcon from '../../atoms/icons/StarIcon';
import FlexContainer from '../../atoms/flexContainer/FlexContainer';
// import Badge from '../../molecules/badge/Badge';
import { IRepoData } from '../../../interfaces/searchRepos';
import CollectionItem from '../../molecules/collectionItem/CollectionItem';
import {
	StyledImageContainer,
	StyledContentContainer,
} from './Repository.styled';
import TextLink from '../../molecules/textLink/TextLink';
import Grid from '@mui/material/Grid';
import { Badge, Code, Star } from '@mui/icons-material';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const Repository: FC<{ repo: IRepoData }> = ({ repo }) => {
	return (
		// <Grid item xs={12} md={6} lg={4}>
		<Grid item xs={4} sm={4} md={4}>
			<Box
				display="flex"
				flexDirection="column"
				sx={{
					border: 1,
					borderColor: 'divider',
					borderRadius: '5px',
					marginBottom: '10px',
					padding: '1rem',
					height: '100%',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					<Box display={'flex'} alignItems={'center'} flexDirection="row">
						<Avatar
							alt={repo.owner.login}
							src={`${repo.owner.avatar_url}`}
							sx={{ height: '60px', width: '60px' }}
						/>
						<Box
							display={'flex'}
							flexDirection="column"
							justifyContent="center"
							sx={{
								ml: '1rem',
								mb: '1rem',
							}}
						>
							<Box sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
								<TextLink
									to={`https://github.com/${repo.owner.login}/${repo.name}`} /* href="/repo/[id]" as={`/repo/${repo.id}`} */
								>
									<Typography typography={'h5'} sx={{ lineBreak: 'anywhere' }}>
										{repo.name}
									</Typography>
								</TextLink>
							</Box>
							<Box
								sx={{
									display: '-webkit-box',
									WebkitLineClamp: 3,
									WebkitBoxOrient: 'vertical',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
								}}
							>
								<Typography>{repo.description}</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box sx={{ justifySelf: 'flex-start' }}>
					{repo?.language && (
						<Chip
							sx={{ marginInline: '.2rem', marginBlock: '.4rem' }}
							label={repo.language}
						/>
					)}
					{repo?.stargazers_count && (
						<Chip
							sx={{ marginInline: '.2rem' }}
							icon={<Star />}
							label={repo.stargazers_count.toString()}
						/>
					)}
					{repo?.forks_count && (
						<Chip
							sx={{ marginInline: '.2rem' }}
							icon={<Code />}
							label={repo.forks_count.toString()}
						/>
					)}
				</Box>
			</Box>
		</Grid>
	);
};

export default Repository;
