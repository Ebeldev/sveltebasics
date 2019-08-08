<script>
    import { count } from '../../store/stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
    import Resetter from './Resetter.svelte';
</script>

<span>Using a Writable store</span>
<h1>The count is {$count}</h1>
<Incrementer/>
<Decrementer/>
<Resetter/>