<script lang="ts">
	import { getContext, onMount } from 'svelte'

	const { getCanvas } = getContext('canvas')

	export let x: number
	export let y: number
	export let width: number
	export let height: number

	onMount(() => {
		const canvas: HTMLCanvasElement = getCanvas()
		const ctx = canvas.getContext('2d')
		ctx?.fillRect(y, x, width, height)
	})
</script>
