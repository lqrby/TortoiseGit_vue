<template>
  <div class="login ">
        <h1>Login</h1>
        <form method="post">
            <!-- <h2>{{isLogin}}</h2> -->
            <input type="text" name="u" placeholder="请输入用户名" required="required" v-model="user.userName"/>
            <input type="password" name="p" placeholder="请输入密码" required="required" v-model="user.passWord" />
            <button type="button" class="btn btn-primary btn-block btn-large" @click="loginBtn">登录</button>
        </form>
    </div>
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
                // console.log("进入这里了")
                axios.get("../../static/login.json").then((res) =>{
                if(res.data.userName == this.user.userName && res.data.passWord == this.user.passWord){
                //this.loginAction();
                sessionStorage.setItem("user",JSON.stringify(res.data));
                store.dispatch('loginAction');
                this.$router.push({ path: '/list' });
                
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
