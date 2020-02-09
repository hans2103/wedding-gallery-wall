import Image from '../Image/Image'

const Figure = (props) => (
	<figure className="gallery__figure">
		<Image
			src = {props.image}
			alt = {props.alt} />
	</figure>
)

export default Figure
