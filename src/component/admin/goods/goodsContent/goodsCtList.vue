<template>
  <div> 
      <!--面包屑导航  -->
      <el-breadcrumb separator="/" class='nav'>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>购物商城</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      </el-breadcrumb>

      <!-- 按钮 -->
      <div style="margin: 20px 0">
        <el-button plain icon='el-icon-plus' size='mini'>新增</el-button>
        <el-button plain icon='el-icon-check' size='mini'>编辑</el-button>
        <el-button plain icon='el-icon-delete' size='mini'>删除</el-button>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" size='mini' style='width: 200px; float: right'>
      </el-input>  
      </div>
    <template>
      <el-table ref="multipleTable" tooltip-effect="dark" style="width: 100%"
        :data="tableData3" @selection-change="handleSelectionChange">
        <!-- type类型selsection 表示为多选框 -->
        <!-- label 是表头 -->
        <el-table-column type="selection" width="55"></el-table-column>

        <!-- 标题 -->
        <el-table-column label="标题" width="450">
          <template slot-scope="scope">
            <router-link :to='{name: goodsctedit}'>{{ scope.row.title }}</router-link>
          </template>
        </el-table-column>
        
        <!-- 所属类别 -->
        <el-table-column label="所属类别">
            <template slot-scope="scope">{{ scope.row.categoryname }}</template>
          </el-table-column>
        <!-- 库存 -->
        <el-table-column label="库存">
          <template slot-scope="scope">{{ scope.row.stock_quantity }}</template>
        </el-table-column>
        
        <!-- 市场价 -->
        <el-table-column label="市场价">
          <template slot-scope="scope">{{ scope.row.market_price }}</template>
        </el-table-column>
        
        <!-- 销售价 -->
        <el-table-column label="销售价">
          <template slot-scope="scope">{{ scope.row.sell_price }}</template>
        </el-table-column>
        
        <!-- 属性 -->
        <el-table-column label="属性">
          <template slot-scope="scope">
            <span icon='el-icon-upload2'> </span>
            
          </template>
        </el-table-column>
        
        <!-- 操作 -->
        <el-table-column label="操作">
          <template slot-scope="scope">删除</template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tableData3:[]
      }
    },
    methods:{
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    created(){
      this.$http.get(this.$api.gsList + "?pageIndex=1&pageSize=10").then(res=>{
        console.log(res)
        this.tableData3 = res.data.message
      })
    }
  }
</script>

<style scoped>
  .nav{
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }

</style>