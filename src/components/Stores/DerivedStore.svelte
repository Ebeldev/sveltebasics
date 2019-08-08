<script>
    import { elapsed } from '../../store/stores.js'

    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });
console.log('elapse', elapsed)
</script>

<span>Using a derived store</span>
<h2>
	This page has been open for
	{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
</h2>