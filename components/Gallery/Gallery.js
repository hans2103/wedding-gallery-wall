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
		</ul>
	)
}

export default Gallery
