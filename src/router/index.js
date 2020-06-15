import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index/Index')
  },
  {
    path: '/theater',
    name: 'Theater',
    component: () => import('@/views/theater/Theater')
  },
  {
    path:'/ticket',
    name:'Ticket',
    component: () => import('@/views/ticket/Ticket')
  },
  {
    path:'*',
    name:'Error',
    component: () => import('@/views/error/Error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
