import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/PhotoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
