import { createStore } from 'easy-peasy'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { auth } from './auth'
import { chat } from './chat'
import { todos } from './todos'

const model = {
	auth,
	chat,
	todos,
}

const localstoreKey = 'chat-app-v1'

// nesting blacklist is also possible --> https://github.com/rt2zz/redux-persist#nested-persists
const localstoreBlacklist = ['auth']

const config = {
	reducerEnhancer: (reducer) =>
		persistReducer(
			{
				blacklist: localstoreBlacklist,
				key: localstoreKey,
				storage,
			},
			reducer
		),
}

export const store = createStore(model, config)

export const persistor = persistStore(store)
