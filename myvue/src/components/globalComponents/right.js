import Vue from "vue";
const right = Vue.component("right", {
  template: `<el-main>
    <router-link :to="{name:'detail'}">
      <el-table :data="tableData">
        <el-table-column prop="userId" label="ID" width=""></el-table-column>
        <el-table-column prop="date" label="日期" width=""></el-table-column>
        <el-table-column prop="name" label="姓名" width=""></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </router-link>
  </el-main>`,
  props: ["tableData"],
  computed: {
    a(){
      return 12+3
    }
  },
  data() {
    return {};
  }
});
export { right };
