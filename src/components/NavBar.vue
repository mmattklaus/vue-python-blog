<template>
    <nav class="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item" href="/">
                <!--<img src="/images/mk-logo.jpg" width="112" height="28">-->
                <span class="title">Edna Mesue</span>
            </router-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <router-link class="navbar-item" to="/blog">
                    Blog
                </router-link>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <router-link to="/about" class="navbar-item">
                            About
                        </router-link>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
                <div class="navbar-item">
                    <router-link :to="{name: 'compose'}" class="button is-warning">
                        <span class="icon">
                          <i class="fas fa-inbox"></i>
                        </span>
                        <span>Inbox</span>
                    </router-link>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <b-field>
                            <b-input v-model="search" icon="search" icon-pack="fas" size="is-small" placeholder="Search" rounded ></b-input>
                    </b-field>
                </div>
                <div class="navbar-item" v-if="!auth">
                    <div class="buttons">
                        <router-link to="/register" class="button is-primary">
                            <strong>Sign up</strong>
                        </router-link>
                        <router-link to="/login" class="button is-light">
                            Log in
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="navbar-end" v-if="auth">
                <avatar/>
                <auth-nav></auth-nav>
            </div>
        </div>
    </nav>
</template>
<script>
    import BIcon from "buefy/src/components/icon/Icon";
    import AuthNav from "./auth/navbar/AuthNav";
    import Avatar from "./auth/navbar/Avatar";

    export default {
        name: 'nav-bar',
        components: {BIcon, 'auth-nav': AuthNav, Avatar},
        data() {
            return {
                search: '',
                navigation: 'home'
            }
        },
        computed: {
            auth () {
                return !!this.$store.state.user.auth
            }
        },
        watch: {
            'search'(term, prev) {
                console.log(`Searching for ${term}`)
            }
        },
        mounted() {
            // console.log('nav ', this.$auth.getToken())
            $(document).ready(function () {
                $(".navbar-burger").click(function () {
                    $(".navbar-burger").toggleClass("is-active");
                    $(".navbar-menu").toggleClass("is-active");
                });
            });
        }
    }
</script>
<style scoped>
    .title {
        color: rgba(0, 0, 0, 0.84);
        fill: rgba(0, 0, 0, 0.84);
        font-style: normal;
        font-weight: 600;
        letter-spacing: -0.93px;
        font-size: 22px;
        line-height: 40px;
        text-align: inherit;
        font-family: medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
    }

    .navbar {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .06);
        padding-left: 120px;
        padding-right: 120px;
        /*padding-top: 52px;*/
    }

    html.has-navbar-fixed-top, body.has-navbar-fixed-top {
        padding-top: 0;
    }
</style>