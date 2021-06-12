import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home'
import Report from '../views/Report'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main Page',
    component: Home,
    meta: {
      title: ''
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
    meta: {
      title: 'nav.report'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
