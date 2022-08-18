<script lang="ts">
  import { flip } from 'svelte/animate'
  import { fade } from 'svelte/transition'
  import { todos } from './store'
</script>

<ul>
  {#each $todos as todo, index (todo.id)}
    <li animate:flip transition:fade>
      <input
        on:change={() => todos.toggleCompleted(index)}
        id={todo.id}
        type="checkbox"
      />
      <label class:completed={todo.completed} for={todo.id}>
        {todo.description}
      </label>
      <button on:click={() => todos.removeTodo(todo.id)}>✕</button>
    </li>
  {/each}
</ul>
