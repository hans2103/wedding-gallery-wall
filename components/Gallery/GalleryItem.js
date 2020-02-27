import Figure from '../Figure/Figure'
import classNames from 'classnames/bind';
import css from './GalleryItem.scss'

let cx = classNames.bind(css)

const GalleryItem = props => {
	let className = cx({
		gallery__item: true,
		horizontal: props.style === 'horizontal',
		vertical: props.style === 'vertical',
		square: props.style === 'square'
	})

	return (
		<li className={className}>
			<Figure
				image={props.image}
				alt={props.alt}/>
		</li>
	)
}

export default GalleryItem



