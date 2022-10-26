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
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Box>
						<TextLink to="/">
							<FlexContainer
								alignItems="center"
								justifyContent="flex-start"
								direction="row"
								height="60px"
							>
								<Heading size="h4">Zebrands</Heading>
							</FlexContainer>
						</TextLink>
					</Box>
					<div className="col s12 m6">
						<SearchBox onDebouncedChange={debouncedSubmit} />
					</div>
				</Box>
			</Container>
		</AppBar>
	);
};

export default Navbar;
