<script lang="ts">
  import AddTodo from './add-todo.svelte'
  import TodoList from './todo-list.svelte'
  import TodosLeft from './todos-left.svelte'

  import { createUniqueId } from '$lib/utils'
  import type { Todo } from '$lib/types'

  let todos: Todo[] = []
  let todo = ''

  $: todosLeft = todos.filter((todo) => !todo.completed).length

  function addTodo() {
    const newTodo = {
      id: createUniqueId(),
      description: todo,
      completed: false,
    }

    todos = [...todos, newTodo]

    todo = ''
  }

  function removeTodo(id: string) {
    todos = todos.filter((todo) => todo.id !== id)
  }
</script>

<AddTodo {addTodo} bind:todo />
<TodoList {removeTodo} bind:todos />
<TodosLeft {todosLeft} />
