import HeaderH2 from '../Header/HeaderH2'
import Gallery from '../Gallery/Gallery'

const Section = props => {
	return (
		<section className="gallery__section">
			<HeaderH2
				text = {props.title}
			/>
			<Gallery
				photos = {props.photos}
			/>
			<style jsx>{`
.gallery__section {
	padding-top: 1.5em;
	padding-bottom: 1.5em;
	border-top: 4px solid #ff0099;
}
			`}</style>
		</section>
	)
}

export default Section
