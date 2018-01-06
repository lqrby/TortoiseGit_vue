<template>
  <div class="div">
        <!-- <div class="aui-content-padded center">
            <img src="../assets/logo.png">
            <h2 v-text="msg"></h2>
            <div class="aui-row-padded">
                <input type="text" name="userName" v-model="parames.userName" placeholder="请输入用户名">
            </div>
            <div class="aui-row-padded">
                <input type="password" name="passWord" v-model="parames.passWord" placeholder="请输入密码">
            </div>
            <p><div class="aui-btn aui-btn-info" @click="loginBtn">登录</div></p>
        </div> -->
        <div  class="aui-content-padded center">
            <img src="../assets/logo.png">
            <h2 v-text="msg"></h2>
            <ul class="aui-list aui-form-list">
            <!-- <li class="aui-list-header">带有输入框</li> -->
            <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-label">
                        用户名:
                    </div>
                    <div class="aui-list-item-input">
                        <input type="text" placeholder="请输入用户名" v-model="parames.userName">
                    </div>
                </div>
            </li>
            <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-label">
                        密码:
                    </div>
                    <div class="aui-list-item-input">
                        <input type="password" placeholder="请输入密码" v-model="parames.passWord">
                    </div>
                </div>
            </li>
            <li>
                <br>
                <div class="aui-btn aui-btn-info" @click="loginBtn">登录</div>
            </li>
            </ul>
            
        </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name:'login',
  data () {
      return {
          msg:'登录页面',
          parames:{
            userName:null,
            passWord:null
          }
         

      }
  },
  methods:{
      loginBtn:function(){
          if(this.parames.userName == null || this.parames.userName == '' ){
                alert("请输入用户名");
            }else if(this.parames.passWord == null || this.parames.passWord ==''){
                alert("请输入密码");
            }else{
                // console.log("进入这里了")
                axios.get("../../static/login.json").then((res) =>{
                if(res.data.userName == this.parames.userName && res.data.passWord == this.parames.passWord){
                this.$router.push({ path: '/list' })
                }else{
                    alert("用户名或密码错误")
                }
                })
                .catch(function (error) {
                    console.log(error);
                });

            }
      },
      register: function() {
                axios.post(this.url, this.parames, {
                      headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      }
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log("错误了")
                    console.log(error);
                  });
            
        }
  }
}
</script>









