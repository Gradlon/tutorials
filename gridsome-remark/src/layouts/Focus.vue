<template>
    <div :style="{border: '2px solid ' + color, padding: '18px'}">
        <h1>FOCUS</h1>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        color: {
            required: false,
            default: 'black',
        }
    }
}
</script>