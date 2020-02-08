import Header from './Header/Header'
import Warning from './Warning'
import Section from './Section/Section'

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
}

export default function Layout(props) {
	return (
		<div style={layoutStyle}>
			<Warning />
			<Header />
			{props.children}
			<Section />
			<Section />
			<Section />
		</div>
	)
}
