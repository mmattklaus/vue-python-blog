<template>
    <div id="login">
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            CMS | LOGIN
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <form @keyup.enter="login">
                                <b-field :type="error.status?'is-danger':''">
                                    <b-input icon="user" ref="username" placeholder="Email" v-model="data.username"></b-input>
                                </b-field>
                                <p class="help is-danger" v-show="error.status">{{ error.message }}</p>
                                <b-field>
                                    <b-input ref="password" type="password" v-model="data.password" v-on:keyup.enter="login"
                                             placeholder="Password" icon="lock" password-reveal>
                                    </b-input>
                                </b-field>
                                <div class="field is-floated-right">
                                    <b-checkbox size="is-small" type="is-success" v-model="data.remember">Remember me
                                    </b-checkbox>
                                </div>
                                <div class="field">
                                    <p class="control">
                                        <button class="button is-fullwidth is-success" @click.prevent="login">
                                            Login
                                        </button>
                                    </p>
                                </div>
                            </form>

                        </div>
                    </div>
                    <footer class="card-footer">
                        <router-link to="/register" class="card-footer-item">Don't have an account</router-link>
                        <router-link to="/forgot-password" class="card-footer-item">Forgot Password</router-link>
                    </footer>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import User from '../../models/User'
    import BField from "buefy/src/components/field/Field";
    import { encrypt } from "../../packages/encode/tokenizer";

    export default {
        name: 'login',
        components: {BField},
        data() {
            return {
                data: {
                    username: '',
                    password: '',
                    remember: false
                },
                error: {
                    status: false,
                    message: 'Invalid username or password'
                }
            }
        },
        methods: {
            async login() {
                if (!this.data.username || !this.data.password) {
                    this.error.status = true;
                    return false;
                }
                this.error.status = false;
                let user = await this.$store.dispatch('findOneUser', {username: this.data.username});
                if (!user || !user._id) {
                    this.error.status = true;
                    return false;
                }
                if (!require('password-hash').verify(this.data.password, user.password)) {
                    this.error.status = true;
                    this.$refs.password.focus();
                    return false;
                }
                this.$store.dispatch('setToken', {token: encrypt(user._id), date: new Date()})
                    .then(_ => {
                        let search = new URLSearchParams(window.location.search);
                        if (search.has('intended')) {
                            let intended = search.get('intended');
                            this.$router.push({name: intended});
                        } else this.$router.push({name: 'home'})
                    });
            },
            getUser() {
                this.$store.dispatch('fetchUsers').then(users => {
                    this.users = users;
                });
                return new Promise((resolve, reject) => {
                    User.findOne({username: this.data.username}, (err, user) => {
                        if (err) reject(err);
                        resolve(user || {})
                    });
                })
            }
        },
        mounted() {
            // console.log(this.$auth.user());
            let search = new URLSearchParams(window.location.search);
            if (search.has('user')) {
                this.data.username = search.get('user');
                this.$refs.password.focus();
            } else this.$refs.username.focus();
        }
    }
</script>
<style>
    #login {
        padding-top: 120px;
    }
</style>