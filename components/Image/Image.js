import Aux from '../hoc/Aux';

const Image = props => {
	return (
		<Aux>
			<img src={props.src} alt={props.alt}/>
			<style jsx>{`
img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
    filter: brightness(0.6);
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform: scale(1);
}
			`}</style>
		</Aux>
	)
}

export default Image
