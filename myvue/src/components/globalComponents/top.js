import Vue from 'vue'
const top = Vue.component('top',{
    template:`<el-header style="text-align: right; font-size: 12px; width:100%;" :data="LoginedUser">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
        <img class="avatars" :src="LoginedUser.avatar"></img>
        <span v-text="LoginedUser.name"></span>
  </el-header>`,
  props: ["LoginedUser"]
})
export {top}


    