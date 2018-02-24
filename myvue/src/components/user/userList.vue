<template>
   <el-container style="border: 1px solid #eee">
  <left></left>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
          <!-- <img class="avatars" :src="LoginedUser.avatar"></img> -->
          <span v-text="LoginedUser.name"></span>
    </el-header>
    
    <!-- <right></right> -->
  </el-container>
</el-container>
</template>

<script>
  
import Vue from 'vue'
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
  import {left} from '@/components/globalComponents/left.js';
  // import {right} from '@/components/globalComponents/right.js';
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
