<template>
    <el-container>
        <el-main class="login_width">
            
            <el-row>
                <el-col :span="24">
                    <el-col class="login_title" :span="24" :center="true">Login</el-col>
                    <el-input @keyup.native="enterUp($event)" class="login_input" placeholder="请输入用户名" v-model="loginUser.userName" clearable></el-input>
                    <el-input id="passWord" @keyup.native="enterUp($event)" class="login_input" type="password" placeholder="请输入密码" v-model="loginUser.passWord" clearable></el-input>
                    <el-input @keyup="enterUp($event)" class="login_input" placeholder="请输入用户名" v-model="loginUser.userName" clearable v-focus></el-input>
                    <el-input id="passWord" @keyup="enterUp($event)" class="login_input" type="password" placeholder="请输入密码" v-model="loginUser.passWord" clearable></el-input>
                    <el-button id="loginId" class="login_buttom" :span="24" type="primary" @click="loginBtn">登录</el-button>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
// import Vue from 'vue'
import {focus} from '@/directive/focus.js'
import store from '@/vuex/store';
import { mapState,mapMutations, mapGetters,mapActions } from 'vuex';
import axios from 'axios'
export default {
  name:'login',
  data () {
      return {
          msg:'登录页面',
          loginUser:{
            userName:null,
            passWord:null
          }
      }
  },
  computed: {
    ...mapState(['LoginedUser']),//状态值简写
    ...mapGetters(['LoginedUser'])//过滤状态值简写
  },
  methods:{
      //...mapMutations(['add','reduce']),//同步调用方法的简写
      ...mapActions(['loginAction','logoutAction']),//异步调用方法的简写
      
      loginBtn(){

          if(this.loginUser.userName == null || this.loginUser.userName == '' ){
                alert("请输入用户名");
            }else if(this.loginUser.passWord == null || this.loginUser.passWord ==''){
                alert("请输入密码");
            }else{
                axios.get("../../static/login.json").then((res) =>{
                if(res.data.userName == this.loginUser.userName && res.data.passWord == this.loginUser.passWord){
                res.data.passWord = "";
                //this.loginUser.userName = "";
                //this.loginUser.passWord = "";
                
                sessionStorage.setItem("user",JSON.stringify(res.data));
                //localStorage.setItem("loginuser",JSON.stringify(res.data));
                store.dispatch('loginAction');
                this.$router.push({ path:'/test/parent'});
                
                }else{
                    //this.loginUser.userName = "";
                    this.loginUser.passWord = "";
                    alert("用户名或密码错误")
                }
                })
                .catch(function (error) {
                    console.log(error);
                });

            }
      },
      enterUp:function(e){
        //let theEvent = window.event || e;
        //let code = theEvent.keyCode || theEvent.which;
        if(e.keyCode==13){
            let loginbtn = document.getElementById("loginId");
            loginbtn.click(); 
        }
      },
  },
  store,
}
 window.onpopstate = function() {  
    if(window.location.hash === '#/'){
        window.history.pushState('forward', null, ''); 
        window.history.forward(1);
        store.dispatch('logoutAction');
    }
 };  

</script>
