import Image from 'next/image';
import React, { FC } from 'react';
import FlexContainer from '../../atoms/flexContainer/FlexContainer';
import Heading from '../../atoms/heading/Heading';
import { IUserData } from '../../../interfaces/searchUsers';
import CollectionItem from '../../molecules/collectionItem/CollectionItem';
import {
	StyledContentContainer,
	StyledImageContainer,
} from '../repository/Repository.styled';
import TextLink from '../../molecules/textLink/TextLink';
import { Grid, Box, Avatar, Typography } from '@mui/material';

interface UserProps {
	user: IUserData;
}

const User: FC<UserProps> = ({ user }) => {
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
							alt={user.login}
							src={`${user.avatar_url}`}
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
									to={`https://github.com/${user.login}`} /* href="/repo/[id]" as={`/repo/${user.id}`} */
								>
									<Typography typography={'h5'} sx={{ lineBreak: 'anywhere' }}>
										{user.login}
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
								<Typography>{user.type}</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default User;
