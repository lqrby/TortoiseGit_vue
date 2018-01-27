import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myLogin from '@/components/myLogin'
import list from '@/components/list'
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
      path:'/list',
      component:list
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
