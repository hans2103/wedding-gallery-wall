import Image from '../Image/Image'

const Figure = (props) => (
	<figure className="gallery__figure">
		<Image
			src={props.image}
			alt={props.alt}/>
		<style jsx>{`
		.gallery__figure {
			width: 100%;
  			height: 100%;
  			cursor: pointer;
  			}
		`}</style>
	</figure>
)

export default Figure
