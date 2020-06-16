import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import '@/assets/css/reset.css'//引入样式初始化
import '@/assets/iconfont/iconfont.css'

import { Swipe, SwipeItem ,Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.prototype.$axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
