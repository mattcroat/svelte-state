<script lang="ts">
	import AddTodo from './add-todo.svelte'
	import TodoList from './todo-list.svelte'
	import TodosLeft from './todos-left.svelte'

	import { createUniqueId } from '$lib/utils'
	import type { Todo } from '$lib/types'

	let todos: Todo[] = []

	function addTodo(event: CustomEvent) {
		todos = [
			...todos,
			{
				id: createUniqueId(),
				description: event.detail,
				completed: false,
			},
		]
	}

	function removeTodo(event: CustomEvent) {
		todos = todos.filter((todo) => todo.id !== event.detail.id)
	}

	$: todosLeft = todos.filter((todo) => !todo.completed).length
</script>

<AddTodo on:add={addTodo} />
<TodoList on:remove={removeTodo} bind:todos />
<TodosLeft {todosLeft} />
