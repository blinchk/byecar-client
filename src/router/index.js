import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home'
import Report from '../views/Report'

Vue.use(VueRouter)

const title = 'ByeCar'

const routes = [
  {
    path: '/',
    name: 'Main Page',
    component: Home,
    meta: {
      title: title
    }
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
    meta: {
      title: `${title} - Report`
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
