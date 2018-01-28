<template>
    <el-container>
        <el-main class="login_width">
            <el-row>
                <el-col :span="24">
                    <el-col class="login_title" :span="24" :center="true">Login</el-col>
                    <el-input class="login_input" placeholder="请输入用户名" v-model="user.userName" clearable></el-input>
                    <el-input class="login_input" type="password" placeholder="请输入密码" v-model="user.passWord" clearable></el-input>
                    <el-button class="login_buttom" :span="24" type="primary" @click="loginBtn">登录</el-button>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>


<script>
import Vue from 'vue'
import store from '@/vuex/store';
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';

import axios from 'axios'
export default {
  name:'login',
  data () {
      return {
          msg:'登录页面',
          user:{
            userName:null,
            passWord:null
          }
      }
  },
  methods:{
      //...mapMutations(['add','reduce']),//同步调用方法的简写
      ...mapActions(['loginAction']),//异步调用方法的简写
      
      loginBtn:function(){
          if(this.user.userName == null || this.user.userName == '' ){
                alert("请输入用户名");
            }else if(this.user.passWord == null || this.user.passWord ==''){
                alert("请输入密码");
            }else{
                axios.get("../../static/login.json").then((res) =>{
                if(res.data.userName == this.user.userName && res.data.passWord == this.user.passWord){
                sessionStorage.setItem("user",JSON.stringify(res.data));
                store.dispatch('loginAction');
                this.$router.push({ path: '/user/userList' });
                
                }else{
                    alert("用户名或密码错误")
                }
                })
                .catch(function (error) {
                    console.log(error);
                });

            }
      },
     store
  }
}
</script>
