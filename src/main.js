import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'//引入样式初始化
import '@/assets/css/border.css'//解决1px边框问题
import '@/assets/iconfont/iconfont.css'//引入阿里图标库
import axios from 'axios'//引入axios
import { Swipe, SwipeItem } from 'vant'//引入vant-ui


Vue.config.productionTip = false
Vue.prototype.$axios = axios//添加到原型上
Vue.use(Swipe);
Vue.use(SwipeItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
