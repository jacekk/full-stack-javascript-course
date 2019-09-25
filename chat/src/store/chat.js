import { action } from 'easy-peasy'

const socketUrl = 'ws://localhost:8080'

export const chat = {
	currentThreadId: null,
	message: '',
	socketRef: null,
	threads: [],
	setupSocket: action((state) => {
		const socket = new WebSocket(socketUrl)

		socket.onopen = () => {
			state.socketRef = socket
		}
	}),
	disconnectSocket: action((state) => {
		const { socketRef } = state

		if (socketRef && socketRef.readyState === WebSocket.OPEN) {
			socketRef.close()
		}
	}),
}
