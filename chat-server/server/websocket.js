var WebSocket = require('ws')

var wsServer

var start = () => {
	console.log('Starting web socket')
	wsServer = new WebSocket.Server({ port: 8081 })

	wsServer.on('open', (ev) => {
		console.log('on WebSocket open')
	})
	wsServer.on('connection', (ws) => {
		console.log('on WebSocket connection')
		ws.on('message', (msg) => {
			let parsed = msg

			try {
				parsed = JSON.parse(msg)
			} catch (ignore) {}

			console.log('on WebSocket message')
			console.log('- plain:', msg)
			console.log('- parsed:', parsed)
		})
	})
}

module.exports = {
	start,
}
