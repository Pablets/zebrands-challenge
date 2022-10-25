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
		<Fragment>
			<nav className="navbar red lighten-2">
				<div className="nav-wrapper container">
					<div className="row">
						<div className="col s12 m6">
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
						</div>
						<div className="col s12 m6">
							<SearchBox onDebouncedChange={debouncedSubmit} />
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

export default Navbar;
