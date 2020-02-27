import Aux from '../hoc/Aux'
import './Image.scss'

const Image = props => {
	return (
		<Aux>
			<img src={props.src} alt={props.alt}/>
		</Aux>
	)
}

export default Image
