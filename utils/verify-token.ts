/**
 * Server-side token check against the GitHub API.
 * Returns true if the numeric id (used as our cookie token) resolves to a real user.
 */
export const verifyToken = async (token: string): Promise<boolean> => {
	if (!token) return false;
	try {
		const response = await fetch(`https://api.github.com/user/${encodeURIComponent(token)}`);
		return response.ok;
	} catch {
		return false;
	}
};
