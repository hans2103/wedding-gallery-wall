import type { GetServerSideProps } from 'next';
import Layout from '../components/layout';
import GalleryLightbox from '../components/GalleryLightbox';
import HeaderH1 from '../components/Header/HeaderH1';
import Warning from '../components/Warning/Warning';
import ThankYou from '../components/ThankYou';
import Logout from '../components/logout';
import data from '../data/data.json';
import { useLogoutSync } from '../utils/auth';
import { verifyToken } from '../utils/verify-token';
import type { Photo } from '../components/GalleryLightbox/types';

interface PhotoGroup {
	title: string;
	photos: Photo[];
}

const Album = () => {
	useLogoutSync();
	return (
		<Layout>
			<Logout />
			<Warning />
			<HeaderH1 />
			{(data.photos as PhotoGroup[]).map((group, i) => (
				<GalleryLightbox
					key={i}
					galleryTitle={group.title}
					imageMasonryDirection="column"
					images={group.photos}
				/>
			))}
			<ThankYou />
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const token = ctx.req.cookies?.token;
	if (!token || !(await verifyToken(token))) {
		return { redirect: { destination: '/login', permanent: false } };
	}
	return { props: {} };
};

export default Album;
