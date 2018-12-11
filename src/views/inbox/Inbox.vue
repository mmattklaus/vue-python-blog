<template>
    <div id="inbox">
        <section class="columns">
            <div class="column is-8 is-offset-2">
                <div class="tabs is-centered">
                    <ul>
                        <router-link :to="{name: 'compose'}" tag="li" active-class>
                            <a>
                                <span class="icon is-small"><i class="fas fa-pen" aria-hidden="true"></i></span>
                                <span>Composer</span>
                            </a>
                        </router-link>
                        <router-link :to="{name: 'draft'}" tag="li" active-class>
                            <a>
                                <span class="icon is-small"><i class="fas fa-book" aria-hidden="true"></i></span>
                                <span>Draft</span>
                            </a>
                        </router-link>
                        <router-link :to="{name: 'published'}" tag="li" active-class>
                            <a>
                                    <span class="icon is-small"><i class="far fa-lightbulb"
                                                                   aria-hidden="true"></i></span>
                                <span>Published</span>
                            </a>
                        </router-link>
                        <router-link :to="{name: 'stats'}" tag="li" active-class>
                            <a>
                                    <span class="icon is-small">
                                        <i class="far fa-file" aria-hidden="true"></i></span>
                                <span>Statistics</span>
                            </a>
                        </router-link>
                    </ul>
                </div>
                <transition tag="div" enter-active-class="animated slideInLeft"
                            leave-active-class="animated slideOutRight" :duration="{ enter: 500, leave: 500 }">
                    <router-view/>
                </transition>

            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Inbox",
        components: {},
        data() {
            return {}
        },
        mounted() {
        }
    }
</script>

<style scoped>
    #inbox {
        padding-top: 100px !important;
        padding-bottom: 60px;
    }

    .tabs li.router-link-exact-active a {
        border-bottom-color: #7957d5;
        color: #7957d5;
    }

</style>