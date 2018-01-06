<template>
  
  <div class="hello">
    <header class="aui-bar aui-bar-nav" id="aui-header">
      <a class="aui-btn aui-pull-left" tapmode @click="goBack">
          <span class="aui-iconfont aui-icon-left"></span>
      </a>
      <div class="aui-title" v-text="msg"></div>
    </header>
    <div class="aui-card-list">
          <!-- <div class="aui-card-list-header aui-border-b">详情页面</div> -->
          <h2>{{$route.params.id}}</h2>
          <div class="aui-card-list-content">
              <ul class="aui-list aui-media-list aui-list-noborder">
                  <li class="aui-list-item aui-list-item-middle" >
                      <div class="aui-media-list-item-inner">
                          <div class="aui-list-item-inner aui-list-item-arrow">
                              <div class="aui-list-item-text">
                                  <div class="aui-list-item-title aui-font-size-14" v-text="'姓名:'+item.name" ></div>
                              </div>
                              <div class="aui-list-item-text" v-text="'性别:'+item.gender"></div>
                              <div class="aui-list-item-text" v-text="'年龄:'+item.age"></div>
                              <div class="aui-list-item-text" v-text="'爱好:'+item.live"></div>
                              <div class="aui-list-item-text" v-text="'手机:'+item.phone"></div>
                              <div class="aui-list-item-text" v-text="'ID:'+item.id" v-show="isHidde"></div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
    </div>
  </div>
   
</template>

<script>
import axios from 'axios';
export default {
  name: 'list',
  data () {
    return {
      msg: '详情页面！',
      item:{},
      isHidde:false
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  },
  
  mounted () {
    var id=this.$route.params.id;
    console.log("id:"+this.$route.params.id)
    userDetail:axios.get("../../static/json/detail"+id+".json").then((res) =>{
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
