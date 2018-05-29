import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import App from './components/app.vue';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
