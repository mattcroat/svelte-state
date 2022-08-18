import { derived, writable } from 'svelte/store'

import { createUniqueId } from '$lib/utils'
import type { Todo } from '$lib/types'

function todosStore(todos?: Todo[]) {
	const { subscribe, update } = writable<Todo[]>(todos ?? [])

	function addTodo(todo: string) {
		const newTodo = {
			id: createUniqueId(),
			description: todo,
			completed: false,
		}

		update((todos) => [...todos, newTodo])
	}

	function toggleCompleted(todoIndex: number) {
		update((todos) => {
			todos[todoIndex].completed = !todos[todoIndex].completed
			return todos
		})
	}

	function removeTodo(id: string) {
		update((todos) => todos.filter((todo) => todo.id !== id))
	}

	return {
		subscribe,
		addTodo,
		toggleCompleted,
		removeTodo,
	}
}

export const todos = todosStore()

export const todosLeft = derived(
	todos,
	($todos) => $todos.filter((todo) => !todo.completed).length
)
