<template>
  <div class='login'>
    <h3>后台管理系统</h3>
    <el-form label-width="80px" :model="formLabelAlign" :rules="rules" ref="ruleForm2">
      <el-form-item label="用户名" prop='uname'>
        <el-input v-model="formLabelAlign.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='upwd'>
        <el-input v-model="formLabelAlign.upwd"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      //校验用户名， 将来配置到下面的validator配置项
      function unameFn(rule, value, callback) {
        if(value == '') {
            callback(new Error('账号不能为空'))
        }else {
            callback();
        }
      }

      //校验密码，将来配置刀下面的validator配置项
      function upwdFn(rule, value, callback) {
        if(value == '') {
            callback(new Error('密码不能为空'))
        }else {
            callback();
        }
      }
      return{
        formLabelAlign:{
          uname:"",
          upwd:""
        },
        rules:{
          uname:[
            { required: true, validator: unameFn, trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          upwd:[
            { required: true, validator: upwdFn, trigger: 'blur' },
            { pattern: /^\w{6,18}$/, trigger: 'blur' }
            
          ]
        }
      }
    },
    methods:{
      //登陆
      login(){
        this.$http.post(this.$api.login, this.formLabelAlign).then(res=>{
          console.log(res);
          if(res.data.status== 0){
            // this.$router.push({name:"admin"})            
            this.$router.push({path:"/admin"})
          }else{
            this.$alert(res.data.message)
          }
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            this.$alert('请填写用户名和密码')
          }
        });
      },
    },
  }
</script>

<style scoped>
  .login{
    width: 300px;
    height: 200px;
    border: 1px solid #fff;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h3{
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
  }
  
</style>