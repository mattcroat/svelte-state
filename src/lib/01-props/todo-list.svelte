<script lang="ts">
	import { flip } from 'svelte/animate'
	import { fade } from 'svelte/transition'
	import type { Todo } from '$lib/types'

	export let todos: Todo[]
	export let toggleCompleted: (id: number) => void
	export let removeTodo: (id: string) => void
</script>

<ul>
	{#each todos as todo, index (todo.id)}
		<li animate:flip transition:fade>
			<input
				on:change={() => toggleCompleted(index)}
				id={todo.id}
				checked={todo.completed}
				type="checkbox"
			/>
			<label class:completed={todo.completed} for={todo.id}>
				{todo.description}
			</label>
			<button on:click={() => removeTodo(todo.id)}>✕</button>
		</li>
	{/each}
</ul>
