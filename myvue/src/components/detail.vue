<template>
  
  <div class="hello">
    <header class="aui-bar aui-bar-nav" id="aui-header">
      <a class="aui-btn aui-pull-left" tapmode @click="goBack">
          <span class="aui-iconfont aui-icon-left"></span>
      </a>
    </header>
    <el-form ref="form" :model="item" label-width="80px">
      <el-form-item label="ID：">
        <el-input v-text="item.id"></el-input>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-text="item.name"></el-input>
      </el-form-item>
      <el-form-item label="性别：">
        <el-input v-text="item.gender"></el-input>
      </el-form-item>
      <el-form-item label="年龄：">
        <el-input v-text="item.age"></el-input>
      </el-form-item>
      <el-form-item label="爱好：">
        <el-input v-text="item.live"></el-input>
      </el-form-item>
      <el-form-item label="手机：">
        <el-input v-text="item.phone"></el-input>
      </el-form-item>
      <el-form-item label="头像：">
        <img :src="item.avatar" style="width:150px;height:150px;"></img>
      </el-form-item>
      <!-- <el-form-item label="活动区域">
        <el-select placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item> -->
      <!-- <el-form-item label="即时配送">
        <el-switch></el-switch>
      </el-form-item> -->
      <!-- <el-form-item label="活动性质">
        <el-checkbox-group>
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item> -->
      <!-- <el-form-item label="特殊资源">
        <el-radio-group>
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item> -->
      <!-- <el-form-item label="活动形式">
        <el-input type="textarea"></el-input>
      </el-form-item> -->
      <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item> -->
    </el-form>


  </div>
   
   
</template>

<script>
import axios from 'axios';
export default {
  name: 'detail',
  data () {
    return {
      msg: '详情页面！',
      item:{},
      isHidde:false,
      // form: {
      //     name: '',
      //     region: '',
      //     date1: '',
      //     date2: '',
      //     delivery: false,
      //     type: [],
      //     resource: '',
      //     desc: ''
      //   }
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    onSubmit() {
        console.log('submit!');
      }
  },
  
  mounted () {
    let id = 1;
    // var id=this.$route.params.id;
    // console.log("id:"+this.$route.params.id)
    userDetail:axios.get("../../../static/json/userJson/userDetail.json").then((res) =>{
      if(res.status == 200){
        this.item = res.data;
      }
    })
    .catch(function (error) {
        console.log(error);
    })
  }

}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
