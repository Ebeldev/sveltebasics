<script>
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing'

    const progress = tweened(0,  {
        duration: 200,
        easing: cubicOut
    })

</script>

<style>
progress {
    display: block;
    width: 100%;
}
</style>
<span>Tweened with ease</span>
<progress value={$progress}></progress>
<button on:click="{()=> progress.set(0)}">0%</button>
<button on:click="{()=> progress.set(0.25)}">25%</button>
<button on:click="{()=> progress.set(0.5)}">50%</button>
<button on:click="{()=> progress.set(0.75)}">75%</button>
<button on:click="{()=> progress.set(1)}">100%</button>