import Logout from './logout';
import styled from "styled-components";
import Head from "next/head";
import React from "react";

const Layout = props => (
	<>
		<Head>
			<title>Schrikkeldag 2020 - Hans en Marijke</title>
			<meta
				name="robots"
				content="noindex,nofollow"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
			<link
				rel="manifest"
				href="/favicon/site.webmanifest"
			/>
			<link
				rel="mask-icon"
				href="/favicon/safari-pinned-tab.svg"
				color="#ff0099"
			/>
			<meta
				name="msapplication-TileColor"
				content="#b9e0d2"
			/>
			<meta
				name="theme-color"
				content="#b9e0d2"
			/>
		</Head>
		<Container>
			{props.children}
		</Container>
	</>
);

const Container = styled.div`
	padding: .75em 0;
    width: 100%;
    height: calc(100vh - 3em);
	user-select: none;
	  
	> * + * {
		margin-top: 1.5em;
		
		&:last-child {
			margin-bottom: 1.5em;
		}
	}
`;

export default Layout
