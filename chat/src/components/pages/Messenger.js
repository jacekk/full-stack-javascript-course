import React from 'react'
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
	const todos = useStoreState((state) => state.todos.items)
	const add = useStoreActions((actions) => actions.todos.add)

	return (
		<div>
			{todos.map((todo, idx) => (
				<div key={idx}>{todo}</div>
			))}
			<AddTodo onAdd={add} />
		</div>
	)
}
