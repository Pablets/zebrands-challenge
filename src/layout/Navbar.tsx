import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { Fragment, useState, useEffect } from 'react';
import FlexContainer from '../components/atoms/flexContainer/FlexContainer';
import Heading from '../components/atoms/heading/Heading';
import SearchBox from '../components/molecules/searchBox/SearchBox';
import TextLink from '../components/molecules/textLink/TextLink';
import { useAppDispatch } from '../hooks/hooks';
import { setSearchString } from '../redux/slices/results/resultsSlice';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Navbar = () => {
	const dispatch = useAppDispatch();

	const [sString, setSString] = useState('');

	const debouncedSubmit = async (value: string) => {
		setSString(value);
	};

	useEffect(() => {
		if (typeof sString !== undefined && sString !== '') {
			dispatch(setSearchString({ searchString: sString }));
			dispatch({ type: 'FETCH_DATA' });
		}
	}, [dispatch, sString]);

	return (
		<AppBar position="static">
			<Container>
				<Grid
					container
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Grid item xs={12} sm={6} height="50px">
						<FlexContainer justifyContent="flex-start">
							<Box display="block" width="fit-content">
								<TextLink to="/">
									<Typography typography="h3">Zebrands</Typography>
								</TextLink>
							</Box>
						</FlexContainer>
					</Grid>
					<Box>
						<Grid item xs={12} sm={6} height="50px">
							<FlexContainer>
								<SearchBox onDebouncedChange={debouncedSubmit} />
							</FlexContainer>
						</Grid>
					</Box>
				</Grid>
			</Container>
		</AppBar>
	);
};

export default Navbar;
