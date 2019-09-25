import { action, thunk } from 'easy-peasy'

const socketUrl = 'ws://localhost:8081'

export const chat = {
	currentThreadId: null,
	message: '',
	socketRef: null,
	threads: [],
	send: action((state, payload) => {
		state.socketRef.send(payload)
	}),
	setSocketRef: action((state, payload) => {
		state.socketRef = payload
	}),
	disconnectSocket: action((state) => {
		const { socketRef } = state

		if (socketRef && socketRef.readyState === WebSocket.OPEN) {
			socketRef.close()
		}
	}),
	// async
	setupSocket: thunk(async (actions) => {
		const socket = new WebSocket(socketUrl)
		socket.onopen = (ev) => {
			console.log('Websocket opened.')
			actions.setSocketRef(ev.target)
		}
		socket.onclose = () => {
			console.log('Websocket closed.')
			actions.setSocketRef(null)
		}
	}),
}
