import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue-highlight.js';
import ElementUI from 'element-ui';
import Buefy from 'buefy'

import "vue-material-design-icons/styles.css"
import 'highlight.js/styles/default.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'buefy/dist/buefy.css'

Vue.use(VueHighlightJS);
Vue.use(ElementUI);
window.$ = require('jquery');
window.jquery = require('jquery');
Vue.use(Buefy, {
	defaultIconPack: 'fa'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
