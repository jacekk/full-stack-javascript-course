import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const AddTodo = ({ onAdd }) => {
	const [inputValue, setInputValue] = React.useState('')

	const onChange = (ev) => {
		setInputValue(String(ev.target.value).trim())
	}

	const onSubmit = (ev) => {
		ev.preventDefault()
		onAdd(inputValue)
		setInputValue('')
	}

	return (
		<form onSubmit={onSubmit}>
			<input onChange={onChange} value={inputValue} />
		</form>
	)
}

export const Messenger = () => {
	const add = useStoreActions((actions) => actions.todos.add)
	const socket = useStoreState((state) => state.chat.socketRef)
	const startChat = useStoreActions((actions) => actions.chat.setupSocket)
	const stopChat = useStoreActions((actions) => actions.chat.disconnectSocket)
	const todos = useStoreState((state) => state.todos.items)

	useEffect(() => {
		startChat()
		return () => {
			stopChat()
		}
	})

	return (
		<div>
			<pre>{JSON.stringify(socket)}</pre>
			<br />
			{todos.map((todo, idx) => (
				<div key={idx}>{todo}</div>
			))}
			<AddTodo onAdd={add} />
		</div>
	)
}
