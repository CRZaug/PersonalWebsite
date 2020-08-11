import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio1 from '../views/Portfolio1.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  }


  
]

const router = new VueRouter({
  mode: 'history', // history keeps track of where I am in the webpage
  base: process.env.BASE_URL,
  routes
})

export default router
