import useAuthentication from '../lib/useAuthentication'

const Album = props => {
	return <div>Welcome to next.js!</div>
}
Album.getInitialProps = async ({ req, res }) => {
	const securitySettings = useAuthentication(req, res)
	return securitySettings
}

export default Album
