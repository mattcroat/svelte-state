<script lang="ts">
	import { setContext, onMount } from 'svelte'

	setContext('canvas', {
		getCanvas: () => canvas,
	})

	export let width: number
	export let height: number

	let canvas: HTMLCanvasElement
</script>

<canvas bind:this={canvas} {width} {height} />

<slot />
