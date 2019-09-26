import { Link } from '@reach/router'
import { useStoreActions } from 'easy-peasy'
import React, { useState, useEffect } from 'react'

export const Signup = () => {
	// @todo remove those defaults
	const [email, setEmail] = useState('bb@op.pl')
	const [password, setPassword] = useState('cc')
	const [username, setUsername] = useState('aa')
	const sendMsg = useStoreActions((actions) => actions.chat.send)
	const startChat = useStoreActions((actions) => actions.chat.setupSocket)
	const stopChat = useStoreActions((actions) => actions.chat.disconnectSocket)

	useEffect(() => {
		startChat()
		return () => {
			stopChat()
		}
	}, [startChat, stopChat])

	const onSubmit = (ev) => {
		ev.preventDefault()
		sendMsg({
			type: 'SIGNUP',
			data: { username, email, password },
		})
	}

	return (
		<div className="container">
			<h1>Signup form</h1>
			<h5>
				Already have an account? <Link to="/login">Log in</Link>
			</h5>
			<div className="row justify-content-center">
				<form className="col-sm col-md-6 col-lg-4" onSubmit={onSubmit}>
					<div className="form-group">
						<label>Username</label>
						<input
							className="form-control"
							onChange={(ev) => setUsername(String(ev.target.value).trim())}
							placeholder="Enter username"
							type="text"
							value={username}
						/>
					</div>
					<div className="form-group">
						<label>Email address</label>
						<input
							className="form-control"
							onChange={(ev) => setEmail(String(ev.target.value).trim())}
							placeholder="Enter email"
							type="email"
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							className="form-control"
							onChange={(ev) => setPassword(String(ev.target.value).trim())}
							placeholder="Password"
							type="password"
							value={password}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}
