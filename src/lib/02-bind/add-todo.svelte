<script lang="ts">
	export let addTodo: () => void
	export let todo: string
</script>

<form on:submit|preventDefault={addTodo}>
	<input type="text" bind:value={todo} />
</form>
