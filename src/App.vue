<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div class="views">
            <transition tag="div" name="custom-classes-transition" enter-active-class="animated slideInLeft"
                        leave-active-class="animated slideOutRight" :duration="{ enter: 300, leave: 300 }">
                <router-view/>
            </transition>
        </div>

    </div>
</template>
<script>
    import NavBar from '@/components/NavBar.vue'

    export default {
        name: 'app',
        components: {
            'nav-bar': NavBar
        },
        data () {
            return {
                transitionName: '',
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        mounted() {
            this.$store.dispatch('checkToken').then(a => {
                // console.log('check', a);
            });
        }
    }
</script>

<style>
    #app {
    }

    .views > :not(#home) {
        padding-top: 200px!important;
    }

    body {
        overflow-x: hidden;
    }
</style>
