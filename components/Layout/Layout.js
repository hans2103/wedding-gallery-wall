import Warning from '../Warning/Warning'
import Header from '../Header/Header'
import Section from '../Section/Section'
import data from '../../data/data'
import Lightbox from '../Lightbox/Lightbox'

const Layout = props => (
	<div className="gallery__wrapper">
		<Warning/>
		<Header/>
		<Lightbox/>
		{props.children}
		{
			data.photos.map((data, i) => {
				return (
					<Section
						key={i}
						title={data.title}
						photos={data.photos}
					/>
				)
			})
		}
	</div>
)

export default Layout
