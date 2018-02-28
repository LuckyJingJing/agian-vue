
import Login from '../component/Login.vue'
 import Admin from '../component/Admin.vue'

 export default {
    routes:[
      {path: '/', redirect: '/admin' },      
      {name:"login", path:'/login', component: Login},
      {name:"admin ", path:'/admin', component: Admin},      
    ]
 }
