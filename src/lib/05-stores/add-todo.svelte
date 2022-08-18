<script lang="ts">
  import { todos } from './store'

  let todo = ''

  function addTodo() {
    todos.addTodo(todo)
    todo = ''
  }
</script>

<form on:submit|preventDefault={addTodo}>
  <input type="text" bind:value={todo} />
</form>
