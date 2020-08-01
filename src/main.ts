// the driver; where everything loads

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// I did this
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";

// these are css files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// IDK what I am doing, but this is supposed to give me smooth scroll
// import smoothscroll from 'smoothscroll-polyfill';



// I did this
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// They did this
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// const smoothScroll = new smoothscroll.polyfill();