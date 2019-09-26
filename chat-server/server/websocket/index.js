var WebSocket = require('ws')

var { signUp } = require('./signup')

var routeMessage = (ws, data) => {
	if (!data || !data.type) {
		return
	}

	switch (data.type) {
		case 'SIGNUP':
			return signUp(ws, data)
	}
}

var start = () => {
	console.log('Starting web socket')
	var wsServer = new WebSocket.Server({ port: 8081 })

	wsServer.on('open', (ev) => {
		console.log('on WebSocket open')
	})
	wsServer.on('connection', (ws) => {
		var onMessage = (msg) => {
			let parsed = msg
			try {
				parsed = JSON.parse(msg)
			} catch (ignore) {}

			console.log('on WebSocket message')
			console.log('- plain:', msg)
			console.log('- parsed:', parsed)

			routeMessage(ws, parsed)
		}

		console.log('on WebSocket connection')
		ws.on('message', onMessage)
	})
}

module.exports = {
	start,
}
