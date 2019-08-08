<script>
    import { fade, fly } from 'svelte/transition'

    let visible = true

    let mode = true
    let current = true

    // $: transtitionType = mode ? 'fade' : 'fly="{{y:200, duration: 2000}}"'
</script>
<style>
.active {
		background-color: #ff3e00;
        color: white;
        padding: 10px;
	}
</style>
<label><input type="checkbox" bind:checked={visible}>visible</label>
<label><input type="checkbox" bind:checked={mode}>mode</label>

{#if visible && mode}
    <p transition:fade>Fade in and out or fly</p>
{:else if !mode}
    <p transition:fly="{{y:200, duration: 2000}}">Fade in and out or fly</p>
{:else}
nothing
{/if}

<p
    in:fly="{{y:200, duration: 2000}}"
    out:fade
    class:active="{current}"
    on:click="{()=> current = !current}"
>In fly and out fade</p>
