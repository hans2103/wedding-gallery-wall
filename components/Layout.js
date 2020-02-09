import Header from './Header/Header'
import Section from './Section/Section'
import data from "../data/data";

const divStyle = {
	display: 'block',
	padding: '2em'
}

const Layout = props => {
	return (
		<div className="gallery__wrapper" style={divStyle}>
			<Header/>
			{props.children}
			{
				data.photos.map((data, i) => {
					return (
						<Section
							key={i}
							title = {data.title}
							photos = {data.photos}
							/>
					)
				})
			}
		</div>
	)
}

export default Layout
