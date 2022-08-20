<script lang="ts">
	import Mouse from './mouse.svelte'

	let x = 0
	let y = 0

	function updatePosition(event: CustomEvent<MouseEvent>) {
		let target = event.detail.target as HTMLDivElement
		let element = target.getBoundingClientRect()

		x = event.detail.clientX - element.left
		y = event.detail.clientY - element.top
	}
</script>

<Mouse on:updatePosition={updatePosition} />

<p>x: {x}, y: {y}</p>
