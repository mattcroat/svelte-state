<script lang="ts">
  import { setContext } from 'svelte'
  import { readable, writable } from 'svelte/store'

  import AddTodo from './add-todo.svelte'
  import TodoList from './todo-list.svelte'
  import TodosLeft from './todos-left.svelte'

  import { createUniqueId } from '$lib/utils'
  import type { Todo } from '$lib/types'

  const todos = writable<Todo[]>([])
  const todosLeft = writable(0)

  $: $todosLeft = $todos.filter((todo) => !todo.completed).length

  setContext('todos', { todos, addTodo, removeTodo, todosLeft })

  function addTodo(todo: string) {
    const newTodo = {
      id: createUniqueId(),
      description: todo,
      completed: false,
    }

    $todos = [...$todos, newTodo]
  }

  function removeTodo(id: string) {
    $todos = $todos.filter((todo) => todo.id !== id)
  }
</script>

<AddTodo />
<TodoList />
<TodosLeft />
