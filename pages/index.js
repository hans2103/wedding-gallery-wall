import styled from 'styled-components';
import GalleryLightbox from '../components/GalleryLightbox';
import HeaderH1 from '../components/Header/HeaderH1';
import data from '../data/data'
import Warning from "../components/Warning/Warning";

export default () => (
	<Container>
		<Warning/>
		<HeaderH1/>
		<GalleryLightbox
			galleryTitle="Het aanzoek"
			imageMasonryDirection="column"
			images={data.photos[0].photos}
		/>
		<GalleryLightbox
			galleryTitle="Schrikkeldag 2020: H&M"
			imageMasonryDirection="column"
			images={data.photos[1].photos}
		/>
	</Container>
);

const Container = styled.div`
	padding: .75em 0;
	height: 100vh;
	width: 100%;
	user-select: none;
	//overflow: hidden;
	  
	> * + * {
		margin-top: 1.5em;
		
		&:last-child {
			margin-bottom: 1.5em;
		}
	}
`;
