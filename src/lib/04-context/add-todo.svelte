<script lang="ts">
	import { getContext } from 'svelte'

	const { addTodo } = getContext('todos')

	let todo = ''

	function handleSubmit() {
		addTodo(todo)
		todo = ''
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value={todo} />
</form>
