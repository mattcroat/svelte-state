<script lang="ts">
	import AddTodo from './add-todo.svelte'
	import TodoList from './todo-list.svelte'
	import TodosLeft from './todos-left.svelte'
	import type { Todo } from '$lib/types'

	let todos: Todo[] = []

	function addTodo(todo: string) {
		todos = [
			...todos,
			{
				id: new Date().getTime().toString(),
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

	$: todosLeft = todos.filter((todo) => !todo.completed).length
</script>

<AddTodo {addTodo} />
<TodoList {todos} {toggleCompleted} {removeTodo} />
<TodosLeft {todosLeft} />
