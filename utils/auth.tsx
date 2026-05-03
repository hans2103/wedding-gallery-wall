import { useEffect } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

export const login = ({ token }: { token: string | number }): void => {
	cookie.set('token', String(token), { expires: 1 });
	Router.push('/album');
};

export const logout = (): void => {
	cookie.remove('token');
	window.localStorage.setItem('logout', String(Date.now()));
	Router.push('/login');
};

/**
 * Cross-tab logout sync. When one tab logs out, others receive the
 * `storage` event and follow.
 */
export const useLogoutSync = (): void => {
	useEffect(() => {
		const handler = (event: StorageEvent) => {
			if (event.key === 'logout') Router.push('/login');
		};
		window.addEventListener('storage', handler);
		return () => {
			window.removeEventListener('storage', handler);
			window.localStorage.removeItem('logout');
		};
	}, []);
};
