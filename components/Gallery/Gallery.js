import GalleryItem from './GalleryItem'

const Gallery = props => {
	return (
		<ul className="gallery__grid">
			{props.photos.map((photo, i) => {
				return <GalleryItem
					key={i}
					image={photo.src}
					style={photo.style}
					alt=''/>
			})}
			<style jsx>{`
.gallery__grid {		
	margin: 0 auto;
  	max-width: 1200px;
  	width: 90vw;
  	display: grid;
  	grid-gap: 1.5em;
  	grid-template-columns: repeat(auto-fit, 180px);
  	grid-auto-rows: calc(180px - 1.5em);
  	justify-content: center;
  	align-content: center;
  	grid-auto-flow: dense;
}  	
			`}</style>
		</ul>
	)
}

export default Gallery
