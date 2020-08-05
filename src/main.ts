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

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard, faFile, faFish, faBook } from '@fortawesome/free-solid-svg-icons';
import { faCalculator, faMouse, faGraduationCap,faLaptopHouse,faInfinity,faLanguage, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faMusic, faTrophy, faUtensils, faMountain} from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faAddressCard, faUserSecret, faGithub, faFile, faFish, faBook, faLinkedin);
library.add(faCalculator, faMouse, faGraduationCap,faLaptopHouse,faInfinity,faLanguage,faChalkboardTeacher);
library.add(faMusic, faTrophy, faUtensils, faMountain)

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);


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