import { action } from 'easy-peasy'

export const todos = {
	items: ['Create store', 'Wrap application', 'Use store'],
	add: action((state, payload) => {
		state.items.push(payload)
	}),
}
