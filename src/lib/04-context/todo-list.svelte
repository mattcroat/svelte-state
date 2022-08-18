<script lang="ts">
	import { getContext } from 'svelte'
	import { flip } from 'svelte/animate'
	import { fade } from 'svelte/transition'

	const { todos, removeTodo } = getContext('todos')
</script>

<ul>
	{#each $todos as todo (todo.id)}
		<li animate:flip transition:fade>
			<input id={todo.id} type="checkbox" bind:checked={todo.completed} />
			<label class:completed={todo.completed} for={todo.id}>
				{todo.description}
			</label>
			<button on:click={() => removeTodo(todo.id)}>✕</button>
		</li>
	{/each}
</ul>
