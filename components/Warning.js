const Warning = () => (
	<div className="gallery__message">
		Sorry, your browser does not support CSS Grid. 😅
		<style jsx>{`
.gallery__message {
	border: 1px solid #d2d0d0;
	padding: 2em;
	font-size: 1.7vw;
	box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
}
@supports (display: grid) {
	.gallery__message {
		display: none;
	}
}
		`}</style>
	</div>
)

export default Warning;
