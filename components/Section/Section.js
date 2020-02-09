import HeaderH2 from '../Header/HeaderH2'
import Gallery from '../Gallery/Gallery'

const sectionStyle = {
	paddingTop: '1.5em',
	borderTop: '4px solid #ff0099'
}

export default function Section(props) {
	return (
		<section style={sectionStyle}>
			<HeaderH2
				text = {props.title}
			/>
			<Gallery
				photos = {props.photos}
			/>
		</section>
	)
}
