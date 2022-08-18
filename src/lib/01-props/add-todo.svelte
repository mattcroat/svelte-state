<script lang="ts">
	export let addTodo: (todo: string) => void

	let todo = ''

	function handleSubmit() {
		addTodo(todo)
		todo = ''
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value={todo} />
</form>
