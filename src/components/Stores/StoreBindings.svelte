<script>
    import { name, greeting } from '../../store/stores.js'
</script>

<span>This is using store binding</span>
<h2>{$greeting}</h2>
<input bind:value={$name} />
<button on:click="{()=> $name += '!'}">Add a exclamation mark!</button>