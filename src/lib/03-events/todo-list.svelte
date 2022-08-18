<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { flip } from 'svelte/animate'
	import { fade } from 'svelte/transition'
	import type { Todo } from '$lib/types'

	export let todos: Todo[]

	const dispatch = createEventDispatcher()

	function removeTodo(id: string) {
		dispatch('remove', { id })
	}
</script>

<ul>
	{#each todos as todo (todo.id)}
		<li animate:flip transition:fade>
			<input id={todo.id} type="checkbox" bind:checked={todo.completed} />
			<label class:completed={todo.completed} for={todo.id}>
				{todo.description}
			</label>
			<button on:click={() => removeTodo(todo.id)}>✕</button>
		</li>
	{/each}
</ul>
