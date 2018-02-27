import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myLogin from '@/components/myLogin'
import userList from '@/components/user/userList'

import detail from '@/components/detail'
import Count from '@/components/Count'
import Error from '@/components/Error'
import list from '@/components/test/list'
import parent from '@/components/test/parent'
import detailTest from '@/components/test/detail1'
import Direct from '@/components/direct'

Vue.use(Router)

export default new Router({
  //mode:'history',
  routes: [
    {
      path: '/',
      name: 'myLogin',
      component: myLogin
    },{
      path:'/user/userList',
      component:userList,
      meta:{auth:true},
    },{
      name:'detail',
      path:'/detail',
      component:detail
    },{
      path:'*',
      component:Error
    },
    {
      path:'/count',
      component:Count
    },{
      path:'/test/parent',
      components:{
        default:parent,
        main:list
      }
      // children:[
      //    {path:'/',component:parent},
      //   {path:'/test/list',component:list},
      //   // {path:'detailTest',component:detailTest},
      // ]
      // name:'direct',
      // path:'/direct',
      // component:Direct
    }
  ]
})
