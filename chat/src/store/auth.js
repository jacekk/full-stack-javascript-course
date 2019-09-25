import { action } from 'easy-peasy'

export const auth = {
	token: null,
	user: {},
	setToken: action((state, payload) => {
		state.token = payload
	}),
	resetToken: action((state) => {
		state.token = null
	}),
}
