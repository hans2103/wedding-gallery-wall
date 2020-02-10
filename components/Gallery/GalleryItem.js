import Figure from '../Figure/Figure'

const GalleryItem = props => {
	return (
		<li className={`gallery__item ${props.style}`}>
			<Figure
				image={props.image}
				alt={props.alt}/>
			<style jsx>{`
.gallery__item {
	overflow: hidden;
}

.gallery__item.horizontal {
	grid-column: span 2;
}

.gallery__item.square {
    grid-column: span 2;
    grid-row: span 2;
}

.gallery__item.vertical {
    grid-row: span 2;
}

.gallery__item:focus {
    outline: none;
}

.gallery__item:focus img,
.gallery__item:hover img {
	transform: scale(1.1);
	filter: brightness(1);
}
				`}</style>
		</li>
	)
}

export default GalleryItem



