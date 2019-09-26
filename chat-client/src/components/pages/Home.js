import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'

export const Home = () => {
	const authStore = useStoreState((state) => state.auth)
	const setToken = useStoreActions((actions) => actions.auth.setToken)
	const resetToken = useStoreActions((actions) => actions.auth.resetToken)

	return (
		<div>
			<pre>{JSON.stringify(authStore)}</pre>
			<div>
				<button type="button" class="btn btn-primary" onClick={() => setToken(String(Math.random() * 1e4))}>
					Set random
				</button>
				&nbsp;
				<button type="button" class="btn btn-primary" onClick={() => resetToken()}>
					Reset
				</button>
			</div>
		</div>
	)
}
