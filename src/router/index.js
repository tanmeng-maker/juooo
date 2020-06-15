import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
	{
		path:"/",
    name:"index",
    component:()=>import("@/views/index/Index")
  },
  {
    path:"/theater",
    name:"theater",
    component:()=>import("@/views/theater/Theater")
  },
  {
    path:"/ticket",
    name:"ticket",
    component:()=>import("@/views/ticket/Ticket") 
  },
  {
    path:"/my",
    name:"my",
    component:()=>import("@/views/my/My")
  },
  {
    path:"*",
    name:"error",
    component:()=>import("@/views/error/Error")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
