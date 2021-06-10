<template>
    <div>
        <button :style="`padding: 22px; background-color: ${color}`">
            Big Button
        </button>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            default: 'black',
        }
    }
}
</script>