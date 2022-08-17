<script lang="ts">
	import { slide } from 'svelte/transition'

	import Colocation from '$lib/01-colocation/index.svelte'
	import Bind from '$lib/02-bind/index.svelte'
</script>

<h1>Svelte State Management 🔥</h1>

<details transition:slide>
	<summary>Colocation</summary>
	<Colocation />
</details>

<hr />

<details>
	<summary>Bind</summary>
	<Bind />
</details>
