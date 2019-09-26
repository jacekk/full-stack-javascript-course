import { PersistGate } from 'redux-persist/integration/react'
import { Router, Redirect } from '@reach/router'
import { StoreProvider } from 'easy-peasy'
import React from 'react'

import { Home } from './components/pages/Home'
import { Messenger } from './components/pages/Messenger'
import { Navbar } from './components/Navbar'
import { Signup } from './components/pages/Signup'
import { store, persistor } from './store'

import './App.sass'

export const App = () => (
	<StoreProvider store={store}>
		<PersistGate loading={<div>Loading...</div>} persistor={persistor}>
			<div className="App">
				<Navbar />
				<Router className="App-router">
					<Home path="/" />
					<Signup path="/signup" />
					<Messenger path="/messenger" />
					<Redirect from="*" to="/" />
				</Router>
			</div>
		</PersistGate>
	</StoreProvider>
)
