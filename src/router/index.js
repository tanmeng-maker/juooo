import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
	{
    //我的
		path:"/",
    name:"index",
    component:()=>import("@/views/index/Index"),
    meta:{
      TabBarShow:true
    }
  },
  { 
    //剧院
    path:"/theater",
    name:"theater",
    component:()=>import("@/views/theater/Theater"),
    meta:{
      TabBarShow:true
    }
  },
  {
    //票夹
    path:"/ticket",
    name:"ticket",
    component:()=>import("@/views/ticket/Ticket"),
    meta:{
      TabBarShow:true
    }
  },
  {
    //我的
    path:"/my",
    name:"my",
    component:()=>import("@/views/my/My"),
    meta:{
      TabBarShow:true
    }
  },
  {
    //登录
    path:"/login",
    name:"login",
    component:()=>import("@/views/login/Login"),
  },
  {
    //忘记密码
    path:"/resetpassword",
    name:"resetpassword",
    component:()=>import("@/views/login/components/Resetpassword")
  },
  {
    //详情
    path:"/detail",
    name:"detail",
    component:()=>import("@/components/detail/Detail")
  },
  {
    //404页面
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
