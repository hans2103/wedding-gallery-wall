import Image from '../Image/Image'
import css from './Figure.scss'

const Figure = (props) => (
	<figure className={css.gallery__figure}>
		<Image
			src={props.image}
			alt={props.alt}/>
	</figure>
)

export default Figure
