import { useState, type FormEvent } from 'react';
import Layout from '../components/layout';
import { login } from '../utils/auth';
import {
	loginWrapper,
	loginForm,
	loginLabel,
	loginInput,
	loginButton,
} from '../styled-system/recipes';

interface UserData {
	username: string;
	error: string;
}

const Login = () => {
	const [userData, setUserData] = useState<UserData>({ username: '', error: '' });

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setUserData((prev) => ({ ...prev, error: '' }));

		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username: userData.username }),
			});

			if (response.ok) {
				const { token } = (await response.json()) as { token: number };
				login({ token });
			} else {
				setUserData((prev) => ({ ...prev, error: response.statusText }));
			}
		} catch (error) {
			const message = error instanceof Error ? (error as Error).message : 'Unknown error';
			setUserData((prev) => ({ ...prev, error: message }));
		}
	};

	return (
		<Layout>
			<div className={loginWrapper()}>
				<form className={loginForm()} onSubmit={handleSubmit}>
					<label className={loginLabel()} htmlFor="username">
						Wachtwoord
					</label>

					<input
						className={loginInput()}
						type="password"
						id="username"
						name="username"
						autoComplete="current-password"
						aria-describedby={userData.error ? 'login-error' : undefined}
						aria-invalid={Boolean(userData.error)}
						value={userData.username}
						onChange={(event) =>
							setUserData((prev) => ({ ...prev, username: event.target.value }))
						}
					/>

					<button className={loginButton()} type="submit">
						Login
					</button>

					{userData.error && (
						<p id="login-error" role="alert">
							Error: {userData.error}
						</p>
					)}
				</form>
			</div>
		</Layout>
	);
};

export default Login;
