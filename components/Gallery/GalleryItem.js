import Figure from '../Figure/Figure'

const GalleryItem = props => {
	return (
		<li className="gallery__item">
			<Figure
				image={props.image}
				alt={props.alt}/>
		</li>
	)
}

export default GalleryItem



