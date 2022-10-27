import React, { FC } from 'react';
// import Badge from '../../molecules/badge/Badge';
import { IRepoData } from '../../../interfaces/searchRepos';

import Grid from '@mui/material/Grid';
import { Code, Star } from '@mui/icons-material';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Link from 'src/components/atoms/muiLink/MuiLink';

const Repository: FC<{ repo: IRepoData }> = ({ repo }) => {
	return (
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
								<Link
									href={`https://github.com/${repo?.owner?.login}/${repo?.name}`}
								>
									{repo.name}
								</Link>
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
