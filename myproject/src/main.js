import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './store'
import Vue2Editor from "vue2-editor";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vue2Editor);
Vue.prototype.$axios = axios;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
