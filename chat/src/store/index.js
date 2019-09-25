import { createStore } from 'easy-peasy'

import { todos } from './todos'

export const store = createStore({
	todos,
})
