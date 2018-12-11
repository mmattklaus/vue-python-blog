<template>
        <b-dropdown v-model="navigation" position="is-bottom-left">
            <a class="navbar-item" slot="trigger">
                <span>@{{ user.username }}</span>
                &nbsp;&nbsp;
                <b-icon icon="chevron-down" pack="fas" size="is-small"></b-icon>
            </a>

            <b-dropdown-item has-link>
                <a href="https://google.com" target="_blank">
                    <b-icon pack="fas" icon="link"></b-icon>
                    Google (link)
                </a>
            </b-dropdown-item>
            <hr class="dropdown-divider">
            <b-dropdown-item value="settings">
                <b-icon pack="fas" icon="cogs"></b-icon>
                Settings
            </b-dropdown-item>
            <b-dropdown-item value="logout" @click="logout">
                <b-icon pack="fas" icon="sign-out-alt"></b-icon>
                Logout
            </b-dropdown-item>
        </b-dropdown>
</template>

<script>
    export default {
        name: "AuthNav",
        data () {
            return {
                navigation: ''
            }
        },
        computed: {
            user () {
                return this.$store.state.user.user  || {};
            }
        },
        methods: {
            logout () {
                this.$store.dispatch('logout')
                    .then(_ => {
                        if (this.$route.meta.forAuth) this.$router.go();
                    });
            }
        }
    }
</script>

<style scoped>

</style>