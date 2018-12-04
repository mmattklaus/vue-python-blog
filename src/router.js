import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import Composer from './views/Composer.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                forAuth: false,
                title: 'Home'
            }
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
            meta: {
                forAuth: false,
                title: 'Blog'
            }
        },
        {
            path: '/compose',
            name: 'compose',
            component: Composer,
            meta: {
                forAuth: true,
                title: 'Compose'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                forAuth: false,
                title: 'Login'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                forAuth: false,
                title: 'Register'
            }
        },
        {
            path: '/register/intended',
            name: 'intended-reg',
            component: Register,
            meta: {
                forAuth: false,
                title: 'Register'
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                forVisitors: false,
                title: 'About'
            }
        }
    ]
})
