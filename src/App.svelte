<script>
	export let name = 'default';

	import Tweened from './components/Tweens/Tweened.svelte'
	import TweenedEase from './components/Tweens/TweenedEase.svelte'
	import TweenedEaseElastic from './components/Tweens/TweenedEaseElastic.svelte'
	import Spring from './components/Tweens/Spring.svelte'
	import Transition from './components/Tweens/Transition.svelte'
	import Slot from './components/Slots/Slots.svelte'
</script>

<style>
	h1 {
		color: purple;
	}
	.active {
		background-color: red;
		padding: 10px;
		color: white;
	}
</style>

<span>javascript code in curly brakets: name.toUpperCase</span>
<h1>Hello2 {name.toUpperCase()}!</h1>
<hr>

<Slot />
<hr>
<Slot let:hovering={active}>
	<span slot="header">Custom header slot</span>
	<div class:active>
		{#if active}
			inside a slot
		{:else}
			not active inside a slot
		{/if}
	</div>
</Slot>
<hr>
<Tweened />
<hr>

<TweenedEase />
<hr>

<TweenedEaseElastic />
<hr>

<Spring />
<hr>

<Transition />