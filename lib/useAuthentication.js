const auth = require('basic-auth')

const checkAuth = req => {
	var user = auth(req)
	if (user && user.name === 'user' && user.pass === 'password') {
		return false
	}
	return user.name
}

const useAuthentication = (req, res) => {
	let shouldDisallowAccess = false
	let username

	// Whitelist these IPs
	const allowedIps = ['x.x.x.x', 'x.x.x.x']
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

	// Only check security when deployed through Now
	if (process.env.NOW_REGION) {
		// Disallow access when you are not whitelisted
		if (!allowedIps.includes(ip)) {
			shouldDisallowAccess = true
			// Check if the visitor sent a user/pass combination with basic auth
			username = checkAuth(req, res)
			// If we found a valid user, allow access again
			if (username) {
				shouldDisallowAccess = false
			}
		}
	}

	// Disallow access, and give the visitor a chance to enter their credentials with basic auth
	if (shouldDisallowAccess) {
		res.statusCode = 401
		res.setHeader('WWW-Authenticate', 'Basic realm="My protected Next app"')
		res.end(`Not allowed for ${ip}`)
		return
	}
	return {shouldDisallowAccess, username}
}

export default useAuthentication
