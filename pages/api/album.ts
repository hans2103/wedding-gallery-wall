import type { NextApiHandler } from 'next';
import { verifyToken } from '../../utils/verify-token';

interface AlbumResponse {
	ok?: true;
	message?: string;
}

const albumHandler: NextApiHandler<AlbumResponse> = async (req, res) => {
	if (req.method !== 'GET') {
		res.setHeader('Allow', 'GET');
		return res.status(405).json({ message: 'Method Not Allowed' });
	}

	const auth = req.headers.authorization;
	if (!auth) {
		return res.status(401).json({ message: 'Authorization header missing' });
	}

	let token: string | undefined;
	try {
		({ token } = JSON.parse(auth) as { token?: string });
	} catch {
		return res.status(400).json({ message: 'Malformed authorization header' });
	}
	if (!token) {
		return res.status(401).json({ message: 'Token missing' });
	}

	const valid = await verifyToken(token);
	if (!valid) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	res.setHeader('Cache-Control', 'private, max-age=300');
	return res.status(200).json({ ok: true });
};

export default albumHandler;
