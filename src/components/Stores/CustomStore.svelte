<script>
    import { customCount } from '../../store/stores.js'
</script>

<span>Using a custom store</span>
<h2>The count is {$customCount}</h2>

<button on:click={customCount.increment}>+</button>
<button on:click={customCount.decrement}>-</button>
<button on:click={customCount.reset}>reset</button>