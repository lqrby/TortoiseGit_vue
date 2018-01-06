<template>
  <div class="hello">
    <header class="aui-bar aui-bar-nav" id="aui-header">
      <a class="aui-btn aui-pull-left" tapmode @click="goBack">
          <span class="aui-iconfont aui-icon-left"></span>
      </a>
      <div class="aui-title" v-text="msg"></div>
    </header>
    <div class="aui-card-list">
          <div class="aui-card-list-header aui-border-b">列表页面</div>
          <div class="aui-card-list-content">
              <ul class="aui-list aui-media-list aui-list-noborder">
                  <li v-for="item in items" class="aui-list-item aui-list-item-middle" >
                      <router-link :to="{name:'detail',params:{id:item.id}}">
                        <div class="aui-media-list-item-inner">
                          <div class="aui-list-item-inner aui-list-item-arrow">
                              <div class="aui-list-item-text">
                                  <div class="aui-list-item-title aui-font-size-14" v-text="item.name" ></div>
                              </div>
                              <div class="aui-list-item-text" v-text="item.gender"></div>
                              <div class="aui-list-item-text" v-text="item.age"></div>
                              <div class="aui-list-item-text" v-text="item.id" v-show="isHidde"></div>
                          </div>
                      </div>
                      </router-link>
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
      msg: '列表页面',
      items:[],
      isHidde:false
    }
  },

  // methods:{
  //   toDetail:function(){
  //   axios.get("../../static/userList.json").then((res) =>{
  //     if(res.data !== null){
  //       console.log(res.data.user);
  //       this.items = res.data.user;
  //       //alert( this.items)
  //     }
  //   })
  //   .catch(function (error) {
  //       console.log(error);
  //   })
  //   }
  // },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
  },
  
  mounted () {
    userList:axios.get("../../static/userList.json").then((res) =>{
      if(res.data !== null){
       // console.log(res.data.user);
        this.items = res.data.user;
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
