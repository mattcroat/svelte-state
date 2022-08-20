<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	function handleClick(event: MouseEvent) {
		dispatch('updatePosition', event)
	}
</script>

<div class="mousearea" on:mousemove={handleClick} />
