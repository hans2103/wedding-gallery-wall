import Header from './Header/Header'
import Section from './Section/Section'
import data from "../data/data";

const Layout = props => {
	return (
		<div className="gallery__wrapper">
			<Header/>
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
			<style jsx>{`
.gallery__wrapper {			
  	display: none;
  	padding: 2em;
}

@supports(display: grid) {
	.gallery__wrapper {	
    	display: block;
	}
}

.gallery__wrapper > * + * {
    padding-top: 1.5em;
    border-top: 4px solid #ff0099;
}

.gallery__wrapper > *:last-child {
    padding-bottom: 1.5em;
    border-bottom: 4px solid #ff0099;
}			
			`}</style>
		</div>
	)
}

export default Layout
