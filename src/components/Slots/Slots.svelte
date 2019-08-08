<script>
    let hover

    function enter() {
        hover = true
    }

    function leave() {
        hover = false
    }
</script>

<div class="wrapper" on:mouseenter={enter} on:mouseleave={leave}>
    <slot name="header" hovering={hover}>
        <p>Header default</p>
    </slot>
    <p>inside the slot component</p>
    <slot hovering={hover}>
        <em>Default slot content</em>
    </slot>
</div>