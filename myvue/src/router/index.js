import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myLogin from '@/components/myLogin'
import userList from '@/components/user/userList'
import detail from '@/components/detail'
import Count from '@/components/Count'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'myLogin',
      component: myLogin
    },{
      path:'/user/userList',
      component:userList,
       meta:{auth:true}
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
    }
  ]
})
