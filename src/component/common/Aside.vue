<template>
  <el-col :span="12" class='aside'>
    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#1E90FF" text-color="#fff">
      <el-submenu  v-for="(item,index) in menu" :key="item.title" :index="item.title">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(subitem,index) in item.children" :key="subitem.title" index="subitem.title" >
            <router-link :to="subitem.path" class="subitem">{{subitem.title}}</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    data(){
      return{
                // 1 菜单很多项, 所以是个大数组
                // 2 数组里面存放的数据比较杂, 所以是一个对象
                // 2.1 对象里面应该有个title字段
                // 2.2 对象里面应该有个children字段存放子菜单, 是个数组
                // 3 children字段里面又放置很多对象
                // 3.1 有个titlle字段代表子菜单标题
                // 3.2 有个path字段代表点击该标题时跳转的路径
        menu: [
                {
                  title: '资源下载',
                  icon: 'el-icon-document',
                  children: [
                      { title: '内容管理', path: '/a' },
                      { title: '类别管理', path: '/b' },
                      { title: '评论管理', path: '/c' },
                  ]
                },
                {
                  title: '购物商城',
                  icon: 'el-icon-goods',
                  children: [
                      { title: '内容管理', path: '/a' },
                      { title: '类别管理', path: '/b' },
                      { title: '评论管理', path: '/c' },
                  ]
                },
                {
                  title: '订单管理',
                  icon: 'el-icon-menu',
                  children: [
                      { title: '内容管理', path: '/a' },
                      { title: '类别管理', path: '/b' },
                      { title: '评论管理', path: '/c' },
                  ]
                },
              ]
      }
    },
    methods: {

    }
  }
  
</script>

<style scoped>
  .aside{
    width: 100%;
  }
  .el-menu {
    border-right: none;
  }
  .subitem{
    text-decoration: none;
    color: #fff;
  }
</style>