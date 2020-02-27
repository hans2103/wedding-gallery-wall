import GalleryItem from './GalleryItem'
import css from './Gallery.scss'

const Gallery = props => {
	return (
		<ul className={css.gallery__grid}>
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
