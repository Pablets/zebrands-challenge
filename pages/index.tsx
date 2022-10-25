import React, { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Layout from '../src/layout/Layout';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import { store } from '../src/redux/store';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	require('../src/mocks');
}

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</Fragment>
	);
};

export default MyApp;
