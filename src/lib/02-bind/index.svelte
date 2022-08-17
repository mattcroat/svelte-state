<script lang="ts">
	import AddTodo from './add-todo.svelte'
	import TodoList from './todo-list.svelte'
	import TodosLeft from './todos-left.svelte'
	import type { Todo } from '$lib/types'

	let todos: Todo[] = []
	let todo = ''

	function addTodo() {
		todos = [
			...todos,
			{
				id: new Date().getTime().toString(),
				description: todo,
				completed: false,
			},
		]
		todo = ''
	}

	function removeTodo(id: string) {
		todos = todos.filter((todo) => todo.id !== id)
	}

	$: todosLeft = todos.filter((todo) => !todo.completed).length
</script>

<AddTodo {addTodo} bind:todo />
<TodoList {removeTodo} bind:todos />
<TodosLeft {todosLeft} />
