import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
	{
		path:"/",
    name:"index",
    component:()=>import("@/views/index/Index"),
    meta:{
      TabBarShow:true
    }
  },
  {
    path:"/theater",
    name:"theater",
    component:()=>import("@/views/theater/Theater"),
    meta:{
      TabBarShow:true
    }
  },
  {
    path:"/ticket",
    name:"ticket",
    component:()=>import("@/views/ticket/Ticket"),
    meta:{
      TabBarShow:true
    }
  },
  {
    path:"/my",
    name:"my",
    component:()=>import("@/views/my/My"),
    meta:{
      TabBarShow:true
    }
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/login/Login"),
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
