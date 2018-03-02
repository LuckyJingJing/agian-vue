<template>
   <div class="header">
     <div class="left">
        <span class="el-icon-menu"></span>
     </div>
     <div class="right">
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            你好，xxxx<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link :to="{name:'login'}">congfiy</router-link>
            </el-dropdown-item>
            <!-- 默认情况下，监听组件的事件都是监听组件自己emit发射的事件 -->
            <!-- 如果要监听浏览器的原生事件，添加一个native修饰即可 -->
            <el-dropdown-item @click.native="logout">logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
     </div>
   </div>
</template>

<script>
  export default {
    methods:{
      logout(){
        this.$http.get(this.$api.logout).then(res=>{
          console.log(res);
          if(res.data.status == 0){
            this.$router.push({name:'login'})
          }else{
            this.$alert(res.data.message)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .header > .left{
    width: 40px;
    height: 60px;
    float: left;
    text-align: left;
    line-height: 60px;
    font-size: 26px;
  }
  .header > .right{
    width: 100%;
    height: 100%;
    text-align: right;
    font-size: 16px;
    line-height: 60px;

  }
</style>