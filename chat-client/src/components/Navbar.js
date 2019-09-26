import { Link } from '@reach/router'
import React from 'react'

export const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		<div className="collapse navbar-collapse justify-content-center">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/signup">
						Sign up
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/messenger">
						Messenger
					</Link>
				</li>
			</ul>
		</div>
	</nav>
)
