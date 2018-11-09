<template>
    <i :class="'fas fa-' + name"></i>
</template>

<script>
    export default {
        name: "Icon",
        props: {
            name: {
                type: String,
                default: 'book'
            }
        }
    }
</script>

<style scoped>

</style>