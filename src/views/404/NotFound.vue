<template>
    <div>
        <h1>Page not found!!!</h1>
        <div>
            <router-link :to="{name: 'home'}" class="btn btn-warning">Go Home</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>