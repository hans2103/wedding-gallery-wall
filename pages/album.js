import Layout from '../components/layout'
import GalleryLightbox from '../components/GalleryLightbox';
import HeaderH1 from '../components/Header/HeaderH1';
import data from '../data/data'
import Warning from "../components/Warning/Warning";
import ThankYou from "../components/components/ThankYou";

import React from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import { withAuthSync } from '../utils/auth'
import getHost from '../utils/get-host'
import Logout from "../components/logout";

const Album = props => {
	return (
		<Layout>
			<Logout/>
			<Warning/>
			<HeaderH1/>
			{
				data.photos.map((data, i) => {
					return (
						<GalleryLightbox
							key={i}
							galleryTitle={data.title}
							imageMasonryDirection="column"
							images={data.photos}
						/>
					)
				})
			}
			<ThankYou/>
		</Layout>
	)
}

Album.getInitialProps = async ctx => {
	const { token } = nextCookie(ctx)
	const apiUrl = getHost(ctx.req) + '/api/album'

	const redirectOnError = () =>
		typeof window !== 'undefined'
			? Router.push('/login')
			: ctx.res.writeHead(302, { Location: '/login' }).end()

	try {
		const response = await fetch(apiUrl, {
			credentials: 'include',
			headers: {
				Authorization: JSON.stringify({ token }),
			},
		})

		if (response.ok) {
			const js = await response.json()
			console.log('js', js)
			return js
		} else {
			// https://github.com/developit/unfetch#caveats
			return await redirectOnError()
		}
	} catch (error) {
		// Implementation or Network error
		return redirectOnError()
	}
}

export default withAuthSync(Album)
