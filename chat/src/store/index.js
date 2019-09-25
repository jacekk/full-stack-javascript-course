import { createStore } from 'easy-peasy'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { auth } from './auth'
import { todos } from './todos'

const localstoreKey = 'chat-app-v1'
const localstoreBlacklist = ['auth.token']

const model = {
	auth,
	todos,
}

const config = {
	reducerEnhancer: (reducer) =>
		persistReducer(
			{
				blacklist: localstoreKey,
				key: localstoreBlacklist,
				storage,
			},
			reducer
		),
}

export const store = createStore(model, config)

export const persistor = persistStore(store)
