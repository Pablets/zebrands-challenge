import { useRouter } from 'next/router';
import React, { FC, Fragment, PropsWithChildren, useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';
import FlexContainer from '../components/atoms/flexContainer/FlexContainer';
import Navbar from './Navbar';
import { Backdrop, Box, CircularProgress, Container } from '@mui/material';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
	const router = useRouter();
	const { pending, error } = useAppSelector((state) => state.resultsSlice);

	useEffect(() => {
		if (!error) return;
		router.replace('/error');
	}, [error, router]);

	return (
		<Box display="flex" flexDirection="column" width="100vw">
			{/* {!error && <Navbar />} */}
			<Navbar />
			<Backdrop
				open={pending}
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<FlexContainer
					direction="row"
					alignItems="center"
					justifyContent="center"
					height="100%"
					customStyles={{
						position: 'fixed',
						zIndex: 400,
						maxHeight: '100vh',
					}}
				>
					<CircularProgress color="primary" />
				</FlexContainer>
			</Backdrop>
			<Container>{children}</Container>
		</Box>
	);
};

export default Layout;
