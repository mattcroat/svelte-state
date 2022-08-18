<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	let todo = ''

	function addTodo() {
		dispatch('add', todo)
		todo = ''
	}
</script>

<form on:submit|preventDefault={addTodo}>
	<input type="text" bind:value={todo} />
</form>
