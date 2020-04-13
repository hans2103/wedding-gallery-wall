import useAuthentication from '../lib/useAuthentication'

const Page = props => {
	return <div>Welcome to next.js!</div>
}

Page.getInitialProps = async ({ req, res }) => {
	return useAuthentication(req, res)
}

export default Page
