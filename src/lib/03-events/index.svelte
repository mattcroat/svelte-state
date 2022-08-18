<script lang="ts">
  import AddTodo from './add-todo.svelte'
  import TodoList from './todo-list.svelte'
  import TodosLeft from './todos-left.svelte'

  import { createUniqueId } from '$lib/utils'
  import type { Todo } from '$lib/types'

  let todos: Todo[] = []

  $: todosLeft = todos.filter((todo) => !todo.completed).length

  function addTodo(event: CustomEvent) {
    const newTodo = {
      id: createUniqueId(),
      description: event.detail,
      completed: false,
    }

    todos = [...todos, newTodo]
  }

  function removeTodo(event: CustomEvent) {
    todos = todos.filter((todo) => todo.id !== event.detail.id)
  }
</script>

<AddTodo on:add={addTodo} />
<TodoList on:remove={removeTodo} bind:todos />
<TodosLeft {todosLeft} />
