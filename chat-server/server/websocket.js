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
			console.log('on WebSocket message |', msg)
		})
	})
}

module.exports = {
	start,
}
