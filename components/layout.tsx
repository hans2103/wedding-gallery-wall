import type { ReactNode } from 'react';
import Head from 'next/head';
import { layoutContainer } from '../styled-system/recipes';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
	<>
		<Head>
			<title>Schrikkeldag 2020 - Hans en Marijke</title>
			<meta name="robots" content="noindex,nofollow" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ff0099" />
			<meta name="msapplication-TileColor" content="#b9e0d2" />
			<meta name="theme-color" content="#b9e0d2" />
		</Head>
		<div className={layoutContainer()}>{children}</div>
	</>
);

export default Layout;
