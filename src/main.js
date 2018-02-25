//1.引入第三方包
import Vue from 'vue'

//创建vue实例
var vm = new Vue({
  el:"#app",
  //挂载根组件
  render:c=>c(App)
})