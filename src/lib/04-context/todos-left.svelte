<script lang="ts">
	import { getContext } from 'svelte'

	const { todosLeft } = getContext('todos')
</script>

<p>{$todosLeft} items left.</p>
