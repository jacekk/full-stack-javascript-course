import { Link } from '@reach/router'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'

export const Home = () => {
	const authStore = useStoreState((state) => state.auth)
	const setToken = useStoreActions((actions) => actions.auth.setToken)
	const resetToken = useStoreActions((actions) => actions.auth.resetToken)

	return (
		<div>
			<pre>{JSON.stringify(authStore)}</pre>
			<button
				onClick={() => {
					setToken(String(Math.random() * 1e4))
				}}
			>
				Set random
			</button>
			<button
				onClick={() => {
					resetToken()
				}}
			>
				Reset
			</button>
			<br />
			<br />
			<Link to="/signup">Sign up</Link>
			<br />
			<Link to="/messenger">Messenger</Link>
		</div>
	)
}
