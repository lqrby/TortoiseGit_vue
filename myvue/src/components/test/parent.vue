<template>
   <el-container style="border: 1px solid #eee">
  <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native.prevent="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
          <img class="avatars" :src="LoginedUser.avatar"></img>
          <span v-text="LoginedUser.name"></span>
    </el-header>
  
  <el-container>
    
    <el-col :span="6" style="background-color:#a0a0a0;">
    <!-- <h5>自定义颜色</h5> -->
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-container>
    <!-- 引入子组件 -->
    

    <el-footer>
      <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="260">
    </el-pagination>
    </el-pagination>
  </div>
    </el-footer>
    </el-container>
  </el-container>
  <router-view name="main"/>
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
        tableData:[],
        currentPage1: 1,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
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
      ...mapActions(['logoutAction']),//异步调用方法的简写
      userList(){
        axios.get("../../../static/json/userJson/userList.json").then((res) =>{
          if(res.data){
            this.tableData=res.data.user;
          }else{
            alert("暂无数据");
          }
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //菜单收起展开
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //移除
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      //查看
      handleClick(row) {
        console.log(row);
      },
      exit(){
        store.dispatch('logoutAction');
        this.$router.push({path:'/'});
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
