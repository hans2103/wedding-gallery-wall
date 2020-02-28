import styled from 'styled-components';
import GalleryLightbox from '../components/GalleryLightbox';
import HeaderH1 from '../components/Header/HeaderH1';
import data from '../data/data'
import Warning from "../components/Warning/Warning";

export default () => (
	<Container>
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
