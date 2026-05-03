import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import '../styles/globals.css';

const tagManagerArgs = {
	gtmId: 'GTM-KZ7Z257',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		TagManager.initialize(tagManagerArgs);
	}, []);

	return <Component {...pageProps} />;
};

export default MyApp;
