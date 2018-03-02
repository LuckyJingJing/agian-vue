
import Login from '../component/Login.vue'
import Admin from '../component/admin/admin.vue'

import GoodsCtList from '../component/admin/goods/goodsContent/goodsCtList.vue'
import GoodsCtEdit from '../component/admin/goods/goodsContent/goodsCtEdit.vue'
import GoodsCaList from '../component/admin/goods/goodsCategory/goodsCaList.vue'
import GoodsCaEdit from '../component/admin/goods/goodsCategory/goodsCaEdit.vue'


let childrenComponents =[
  {name:"goodsctlist", path:'goods/content/list', component: GoodsCtList},
  {name:"goodsctedit", path:'goods/content/edit', component: GoodsCtEdit},
  {name:"goodscalist", path:'goods/category/list', component: GoodsCaList},
  {name:"goodscaedit", path:'goods/category/edit', component: GoodsCaEdit}
  
]
 export default {
    routes:[
      {path: '/', redirect: '/admin' },      
      {name:"login", path:'/login', component: Login},
      {name:"admin ", path:'/admin', component: Admin,children:childrenComponents},      
    ]
 }
