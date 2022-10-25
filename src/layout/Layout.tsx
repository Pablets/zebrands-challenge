import { useRouter } from 'next/router';
import React, { FC, Fragment, PropsWithChildren, useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';
import FlexContainer from '../components/atoms/flexContainer/FlexContainer';
import Navbar from './Navbar';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
	const router = useRouter();
	const { pending, error } = useAppSelector((state) => state.resultsSlice);

	useEffect(() => {
		if (!error) return;
		router.replace('/error');
	}, [error, router]);

	return (
		<Fragment>
			{!error && <Navbar />}
			{pending && (
				<>
					<FlexContainer
						direction="row"
						alignItems="center"
						justifyContent="center"
						height="100%"
						customStyles={{
							position: 'fixed',
							zIndex: 400,
							backgroundColor: 'teal',
							maxHeight: '100vh',
							opacity: 0.5,
						}}
					/>
					<FlexContainer
						direction="row"
						alignItems="center"
						justifyContent="center"
						height="100%"
						customStyles={{
							position: 'fixed',
							zIndex: 450,
							maxHeight: '100vh',
						}}
					>
						<div className="preloader-wrapper big active">
							<div className="spinner-layer spinner-blue-only">
								<div className="circle-clipper left">
									<div className="circle"></div>
								</div>
								<div className="gap-patch">
									<div className="circle"></div>
								</div>
								<div className="circle-clipper right">
									<div className="circle"></div>
								</div>
							</div>
						</div>
					</FlexContainer>
				</>
			)}
			{children}
		</Fragment>
	);
};

export default Layout;
