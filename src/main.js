import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Auth from './packages/auth/Auth'
import VueHighlightJS from 'vue-highlight.js';
import ElementUI from 'element-ui';
import Buefy from 'buefy'
import $ from 'jquery'
import {Users, Posts} from './db/Datastore'

import "vue-material-design-icons/styles.css"
import 'highlight.js/styles/default.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'buefy/dist/buefy.css'
import CKEditor from '@ckeditor/ckeditor5-vue'
import MyCustomUploadAdapterPlugin from './modules/editor/MyUploaderAdapter'

import 'animate.css';
// @import('animate.css')

Vue.use(CKEditor, {
    extraPlugins: [MyCustomUploadAdapterPlugin]
});
Vue.use(Auth);
Vue.use(VueHighlightJS);
Vue.use(ElementUI);
Vue.use(Buefy, {
    defaultIconPack: 'fa'
});
Vue.prototype.$db = {
    users: Users,
    posts: Posts
};
Vue.prototype.$$ = $;
window.$ = $;
window.jquery = $;

Vue.mixin({
    data() {
        return {
        }
    },
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        }
    }
});

router.beforeEach(
    (to, from, next) => {
        $('head').find('title').html('Intuitive Blogger | ' + to.meta.title);
        let auth = !localStorage.getItem('authUser')? 0:localStorage.getItem('authUser').length;
        // console.log(router.options.routes.find(route => route.name === 'login'))
        //if (Vue.options.data.intended !== '') {
        // let intended = (Vue.options.data()['intended']);
        // console.log(intended)
        //next({path: intended});
        //return false;
        //}
        if ((to.name === 'login' || to.name === 'register') && auth) {
            window.history.length > 1
                ? router.go(-1)
                : router.push('/');
            // next({
            //     name: 'home'
            // });
        } else if (from.name === 'login' && to.name === 'register' && !auth) {
            // Redirect back if any back route is available
            // if (Vue.auth.auth()) {
            let url = {};
            let search = new URLSearchParams(window.location.search);
            if (search.has('intended')) {
                url.intended = search.get('intended');
                // console.log(url);
                // window.location.search = '';
                next({name: 'intended-reg', query: url});
            }
            next();
            // router.replace({path: url})
        } else if (from.name === 'register' && to.name === 'register' && !auth) {
            next();
        } else if (to.matched.some(record => record.meta.forAuth)) {
            if (auth) {
                next();
            } else {
                let url = `/login`; // ?intended=${to.name}
                next({path: url, query: {intended: to.name}});
            }
        } else next()
    }
);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
