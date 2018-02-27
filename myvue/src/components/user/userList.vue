<template>
   <el-container style="flex-direction:column; border: 1px solid #eee">
    <top :LoginedUser='LoginedUser'></top>
  <el-container style="">
    
    <left></left>
    <right :tableData='tableData'></right>
  </el-container>
</el-container>
</template>

<script>
  
import Vue from 'vue'
import {top} from '@/components/globalComponents/top.js';
import {left} from '@/components/globalComponents/left.js';
  import {right} from '@/components/globalComponents/right.js';
  import store from '@/vuex/store';
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
  import axios from 'axios'
  export default {
    data() {
      return {
        tableData:[]
      }
    },
    computed:{
    ...mapState(['LoginedUser']),//状态值简写
    ...mapGetters(['LoginedUser'])//过滤状态值简写
    },
    mounted() {
        this.userList()
    },
    methods:{
      userList:function(){
        axios.get("../../../static/json/userJson/userList.json").then((res) =>{
          if(res.data){
            //console.log("用户数据是："+res.data.user)
            this.tableData=res.data.user;
          //sessionStorage.setItem("user",JSON.stringify(res.data));
          }else{
            alert("暂无数据");
          }
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    },
    store
  };
  
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
