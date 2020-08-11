// the driver; where everything loads

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMq from 'vue-mq';



// I did this
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";

// these are css files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'


// Contact
import { faAddressCard, faFile, faFish, faBook } from '@fortawesome/free-solid-svg-icons';
library.add(faAddressCard,faFile, faFish, faBook);


// About
import { faCalculator, faMouse, faGraduationCap,faLaptopHouse,faInfinity,faLanguage, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faMusic, faBaseballBall, faUtensils, faMountain} from '@fortawesome/free-solid-svg-icons';
library.add(faCalculator, faMouse, faGraduationCap,faLaptopHouse,faInfinity,faLanguage,faChalkboardTeacher);
library.add(faMusic, faBaseballBall, faUtensils, faMountain)

// Brands
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin,faGithub);

// Timeline
import {faShare} from '@fortawesome/free-solid-svg-icons';
library.add(faShare);

// Projects
import {faSmile} from '@fortawesome/free-solid-svg-icons';
library.add(faSmile);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);


// IDK what I am doing, but this is supposed to give me smooth scroll
// import smoothscroll from 'smoothscroll-polyfill';



// I did this
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Vue MQ
Vue.use(VueMq, {
  breakpoints: {
    sm: 800,
    md: 1250
  }
})

// They did this
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// const smoothScroll = new smoothscroll.polyfill();