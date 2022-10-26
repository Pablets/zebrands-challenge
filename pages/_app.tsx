import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/config/createEmotionCache';
import CustomThemeProvider from 'src/context/theme/CustomThemeProvider';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import Layout from 'src/layout/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	require('../src/mocks');
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<Provider store={store}>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<CustomThemeProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</CustomThemeProvider>
			</CacheProvider>
		</Provider>
	);
}
