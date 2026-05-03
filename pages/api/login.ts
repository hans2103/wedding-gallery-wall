import type { NextApiHandler } from 'next';

interface LoginRequestBody {
	username?: string;
}

interface LoginResponse {
	token?: number;
	message?: string;
}

const MAX_USERNAME_LENGTH = 39;
const GENERIC_ERROR = 'Wachtwoord onjuist';

const loginHandler: NextApiHandler<LoginResponse> = async (req, res) => {
	if (req.method !== 'POST') {
		res.setHeader('Allow', 'POST');
		return res.status(405).json({ message: 'Method Not Allowed' });
	}

	const { username } = (req.body ?? {}) as LoginRequestBody;

	if (
		typeof username !== 'string' ||
		username.trim().length === 0 ||
		username.length > MAX_USERNAME_LENGTH
	) {
		return res.status(401).json({ message: GENERIC_ERROR });
	}

	try {
		const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

		if (!response.ok) {
			return res.status(401).json({ message: GENERIC_ERROR });
		}

		const { id } = (await response.json()) as { id: number };
		return res.status(200).json({ token: id });
	} catch {
		return res.status(401).json({ message: GENERIC_ERROR });
	}
};

export default loginHandler;
