import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import {login} from '../utils/auth'
import styled from 'styled-components'

const Login = () => {
	const [userData, setUserData] = useState({username: '', error: ''})

	const handleSubmit = async event => {
		event.preventDefault()
		setUserData(Object.assign({}, userData, {error: ''}))

		const username = userData.username
		const url = '/api/login'

		try {
			const response = await fetch(url, {
				method: 'POST',

				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({username}),
			})
			if (response.status === 200) {
				const {token} = await response.json()
				await login({token})
			} else {
				console.log('Login failed.')
				// https://github.com/developit/unfetch#caveats
				let error = new Error(response.statusText)
				error.response = response
				throw error
			}
		} catch (error) {
			console.error(
				'You have an error in your code or there are Network issues.',
				error
			)

			const {response} = error
			setUserData(
				Object.assign({}, userData, {
					error: response ? response.statusText : error.message,
				})
			)
		}
	}

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit}>
				<Label htmlFor="username">Wachtwoord</Label>

				<Input
					type="text"
					id="username"
					name="username"
					value={userData.username}
					onChange={event =>
						setUserData(
							Object.assign({}, userData, {username: event.target.value})
						)
					}
				/>

				<Button type="submit">Login</Button>

				{userData.error && <p className="error">Error: {userData.error}</p>}
			</Form>
		</Wrapper>
	)
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Form = styled.form`
  	display: flex;
	flex-flow: column;

	* + * {
		margin-top: 1.5em;
	}
`;

const Label = styled.label`
    display: inline-block;
    margin-bottom: .2963em;
    font-size: inherit;
    line-height: inherit;
    text-align: center;
`;

const Input = styled.input`
	display: block;
    border-radius: .375rem;
    -webkit-appearance: none;
	width: 100%;
    min-height: 2.25em;
    padding: .2963em .44444em;
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    font-weight: 400;
    border: 2px solid #ff0099;
`;

const Button = styled.button`
	-webkit-appearance: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 2.25em;
    font-size: .9rem;
    line-height: 1.5;
    padding: .2963em .66667em;
    color: #ff0099;
    background: #fff;
    border: 1px solid rgba(0,0,0,.35);
    border-radius: .375rem;
    cursor: pointer;
    box-shadow: 0 0.1875rem 0 0 rgba(31,27,55,.15);
    transition: background .2s cubic-bezier(.195,.4,.45,.785),transform .1s cubic-bezier(.195,.4,.45,.785),box-shadow .1s cubic-bezier(.195,.4,.45,.785);
    
    &:hover {
    	background: rgba(255,255,255,.9);
    }
`;

export default Login
