<template>
  <div class="admin">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>        
  </div>
</template>

<script>
  import Aside from './common/Aside.vue'
  import Header from './common/Header.vue'
  export default {
    
    //注册子组件
    components: {
      Aside,
      Header
    }
  }
</script>

<style scoped>
  .admin{
    height: 100%;
  }
  .el-container{
    height: 100%;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color:	#1E90FF;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>