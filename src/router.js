import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Websites from './views/Websites.vue'
import Design from './views/Design.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/webdev',
      name: 'webdev',
      component: Websites,
    },
    {
      path: '/design',
      name: 'design',
      component: Design,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ]
})
