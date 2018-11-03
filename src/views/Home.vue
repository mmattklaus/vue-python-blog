<template>
    <div class="home" id="home">
        <section class="hero is-info is-fullheight">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns">
                        <div class="column is-8 is-offset-2">
                            <h4 class="pretitol" style="margin-bottom: 1rem">CRYPTOCURRENCY INDEX FUND</h4>
                            <h1 class="title">
                                Never miss a ticket to the <span class="corpo">moon</span>
                            </h1>
                            <p class="subtitle">
                                HODL Fund is a <strong>cryptocurrency index fund</strong> which is a token itself. Based
                                on the blockchain technology, it enables full control, transparency and instantaneous,
                                <strong>on-demand withdrawal</strong> of the underlying crypto assets, whose value
                                provides a guaranteed lower bound for the price of the <span class="corpo">$HODL</span>
                                token.
                            </p>
                            <!--<p class="sotatitol">
                              <i class="fa fa-bolt" style="margin-right: 3px; color:#f90"></i>  Sign up now to get early access to $HODL
                            </p>-->
                            <div id="clockdiv" style="margin-top: 30px; display: none">
                                <div>
                                    <span class="days">-247</span>
                                    <div class="smalltext">Days</div>
                                </div>
                                <div>
                                    <span class="hours">-8</span>
                                    <div class="smalltext">Hours</div>
                                </div>
                                <div>
                                    <span class="minutes">18</span>
                                    <div class="smalltext">Minutes</div>
                                </div>
                                <div>
                                    <span class="seconds">47</span>
                                    <div class="smalltext">Seconds</div>
                                </div>
                            </div>
                            <div class="has-text-centered" style="font-size: 0.9rem; margin-top: 2rem;">
                                <i class="fa fa-rocket" style="color:#f90; margin-right: 0.5rem"></i> Token pre-sale
                                postponed to <span class="corpo">UPGRADE</span> the fund, read our latest <a
                                    style="color: #f90"
                                    href="https://medium.com/@hodlfund/update-postponing-the-hodl-token-sale-to-upgrade-the-fund-d79d18867ee7">announcement
                                on MEDIUM <i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        }
    }
</script>
<style>
    html.has-navbar-fixed-top {
        padding-top: 0!important;
        overflow: auto;
    }
    .hero.is-info {
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .button.is-info.telgram:hover {
        background-color: #5ab5ef;
        border-color: transparent;
        color: #fff;
    }

</style>
