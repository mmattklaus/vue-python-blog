<template>
    <div id="login">
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            CMS | Register
                        </p>
                    </header>
                    <div class="card-content">
                        <b-notification :type="'is-' + message.type" :active.sync="message.status">
                            {{ message.text }}
                        </b-notification>
                        <div class="content">
                            <b-field :type="validateName">
                                <b-input ref="name" autofocus icon="user" placeholder="Name" v-model="data.name"></b-input>
                            </b-field>
                            <b-field :type="validateUsername">
                                <b-input v-on:focus="getUsers('username')" icon="user"
                                         placeholder="Username" v-model="data.username"
                                         :loading="load.username"></b-input>
                            </b-field>
                            <b-field :type="validatePhone">
                                <b-input icon="phone" type="phone" placeholder="Phone" v-model="data.phone"></b-input>
                            </b-field>
                            <b-field :type="validateEmail">
                                <b-input v-on:focus="getUsers('email')" icon="envelope" type="email" placeholder="Email"
                                         v-model="data.email" :loading="load.email"></b-input>
                            </b-field>
                            <b-field :type="validatePassword">
                                <b-input icon="lock" type="password" v-model="data.password"
                                         placeholder="Password"
                                         password-reveal>
                                </b-input>
                            </b-field>
                            <b-field :type="validatePasswordConfirmation">
                                <b-input icon="lock" type="password" v-model="data.password_confirmation"
                                         placeholder="Confirm Password">
                                </b-input>
                            </b-field>
                            <b-field>
                                <button class="button is-fullwidth is-success" @click.prevent="register">
                                    Sign Up
                                </button>
                            </b-field>
                        </div>
                    </div>
                    <footer class="card-footer">
						<span class="card-footer-item">
							<router-link to="login"
                                         class="card-footer-item">Already have an account? Sign in</router-link>
						</span>
                    </footer>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import BField from "buefy/src/components/field/Field";

    export default {
        name: 'register',
        components: {BField},
        data() {
            return {
                data: {
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                    password_confirmation: '',
                    phone: ''
                },
                load: {
                    username: false,
                    email: false
                },
                message: {
                    type: 'info',
                    text: 'Hello, World!',
                    status: false
                },
                users: []
            }
        },
        computed: {
            validateEmail() {
                return this.data.email === "" ? "" : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
                    .test(this.data.email) && !this.$store.state.user.users.filter(user => user.email === this.data.email).length? "is-success" : "is-danger"
            },
            validatePasswordConfirmation() {
                return this.data.password_confirmation === "" ? "" : this.data.password_confirmation === this.data.password ? 'is-success' : 'is-danger';
            },
            validatePassword() {
                return this.data.password === "" ? "" : (this.data.password.length < 6) ? "is-danger" : "is-success";
            },
            validateName() {
                return this.data.name === "" ? "" : this.data.name.length > 2 ? "is-success" : "is-danger"
            },
            validateUsername() {
                return this.data.username === "" ? "" : this.$store.state.user.users.filter(user => user.username === this.data.username).length
                    ? "is-danger" : "is-success";
            },
            validatePhone() {
                return this.data.phone === "" ? "" : /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/
                    .test(this.data.phone) ? "is-success" : "is-danger";
            },
        },
        methods: {
            register() {
                let data = Object.assign({}, this.data);
                data.password = require('password-hash').generate(data.password);
                this.$db.users.insert(data, (err, status) => {
                    if (err) {
                        this.message.status = true;
                        this.message.type = 'error';
                        this.message.text = "Fatal: Database insert error";
                        return false;
                    }
                    this.message.text = "Account created successfully!";
                    this.message.type = 'info';
                    this.message.status = true;

                    this.$toast.open('Redirecting to login in 2s...');
                    setTimeout(() => {
                        let query = {user: this.data.username};
                        let search = new URLSearchParams(window.location.search);
                        if (search.has('intended')) {
                            query.intended =  search.get('intended');
                        }
                        this.$router.push({name: 'login', query})
                    }, 2000)
                });
            },
            getUsers(loc) {
                // return new Promise((resolve, reject) => {
                this.load[loc] = true;
                this.$store.dispatch('fetchUsers').then(_ => {
                    this.load[loc] = false;
                });
                // this.$db.users.find({}, (err, users) => {
                //     if (err) this.users = []; // resolve([]);
                //     this.users = users;
                //     console.log(users)
                //     // resolve(users)
                // });
                // });

            },
            log() {
                console.log('hello, owlrd')
            }
        },
        mounted() {
            // console.log(this.$route)
        }
    }
</script>
<style>
    #login {
        padding-top: 120px;
    }

    .control {
        padding-left: 0;
    }
</style>