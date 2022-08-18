<script lang="ts">
	import AddTodo from './add-todo.svelte'
	import TodoList from './todo-list.svelte'
	import TodosLeft from './todos-left.svelte'

	import { createUniqueId } from '$lib/utils'
	import type { Todo } from '$lib/types'

	let todos: Todo[] = []

	$: todosLeft = todos.filter((todo) => !todo.completed).length

	function addTodo(todo: string) {
		todos = [
			...todos,
			{
				id: createUniqueId(),
				description: todo,
				completed: false,
			},
		]
	}

	function toggleCompleted(todoIndex: number) {
		todos[todoIndex].completed = !todos[todoIndex].completed
	}

	function removeTodo(id: string) {
		todos = todos.filter((todo) => todo.id !== id)
	}
</script>

<AddTodo {addTodo} />
<TodoList {todos} {toggleCompleted} {removeTodo} />
<TodosLeft {todosLeft} />
