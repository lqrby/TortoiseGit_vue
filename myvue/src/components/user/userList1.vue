<template>
   <el-container style="border: 1px solid #eee">
    <el-container>
      <el-main>
        <router-link :to="detail">
          <el-table :data="tableData" border>
            <el-table-column prop="userId" label="ID" width="80"></el-table-column>
            <el-table-column prop="name" label="姓名" width="150"></el-table-column>
            <el-table-column prop="gender" label="性别" width="80"></el-table-column>
            <el-table-column prop="age" label="年龄" width="80"></el-table-column>
            <el-table-column prop="date" label="日期" width="150"></el-table-column>
            <el-table-column prop="address" label="地址" width=""></el-table-column>
            <el-table-column fixed="right" label="操作" width="">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </router-link>
      </el-main>

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
