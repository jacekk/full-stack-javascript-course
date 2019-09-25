import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'

export const Auth = () => {
	const { token } = useStoreState((state) => state.auth)
	const setToken = useStoreActions((actions) => actions.auth.setToken)
	const resetToken = useStoreActions((actions) => actions.auth.resetToken)

	return (
		<div>
			<pre>{JSON.stringify(token)}</pre>
			<br />
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
		</div>
	)
}
