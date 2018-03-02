//1.导入vue相关的第三方包
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//导入全局样式
import 'normalize.css'
//导入我们自己写的全局样式
import './less/index.css'


//2.使用路由
Vue.use(VueRouter)
Vue.use(ElementUi)
//2.引入组件
import App from './component/App.vue'

//引入路由配置
import router from './router/router.js'

//导入axios
import axios from 'axios'
//配置基础域名，配置这个之后，我们访问的路径上面会自动加上这个域名，就不需要我们自己手动加上了
axios.defaults.baseURL = 'http://157.122.54.189:9095' 
//把axios绑定在vue的原型上面方便使用
Vue.prototype.$http = axios

//引入我们api文件
import api from './js/api-config'
//把我们的请求的地址，也封装到Vue的原型上面，方便使用
Vue.prototype.$api = api

//路由守卫
var router = new VueRouter(router);
import beforeEach from './js/beforeEach.js'
router.beforeEach(beforeEach)

//创建vue实例
var vm = new Vue({
  el:"#app",
  //挂载根组件
  render:c=>c(App),
  //挂载路由
  router
})