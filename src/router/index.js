import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index.vue'
import simple from '../pages/simple.vue'
import offres from '../pages/offres.vue'
import liste from '../pages/liste.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/index',  name: 'index', component: index },
    { path: '/simple',  name: 'simple', component: simple },
    { path: '/offres',  name: 'offres', component: offres },
    { path: '/liste',  name: 'liste', component: liste },
   
  ]
})

export default router
