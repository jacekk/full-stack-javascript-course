import { Router, Redirect } from '@reach/router'
import { StoreProvider } from 'easy-peasy'
import React from 'react'

import { store } from './store'
import { Auth } from './components/pages/Auth'
import { Messenger } from './components/pages/Messenger'

import './App.css'

export const App = () => (
	<StoreProvider store={store}>
		<div className="App">
			<Router>
				<Auth path="/" />
				<Messenger path="/messenger" />
				<Redirect from="*" to="/" />
			</Router>
		</div>
	</StoreProvider>
)
