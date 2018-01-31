// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import App from './App'

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/mystyle.css'
import App from './App.vue'
import router from './router'
import store from '@/vuex/store';
//Vue.config.productionTip = false
Vue.use(ElementUI)
router.beforeEach(function (to, from, next) {
  if (to.path === '/') {
    next()
  } else if(to.meta.auth && !sessionStorage.getItem('user')){
    // console.log(store.getters.isLogin)
    // console.log(sessionStorage.getItem("user"))
    next({ path: '/' })
    }else{
      console.log("用户状态"+sessionStorage.getItem("user"))
     // console.log("用户状态"+localStorage.getItem("loginuser"))
      next();
    }
    // console.log("meta:"+to.meta.auth);
    // console.log("用户："+sessionStorage.getItem('user'));
      
    // else{
    //   console.log("用户是否已登录"+store.state.isLogin)
    //   next(); 
    //   //next({ path: '/' })
    // }

  //   if(to.matched.some( m => m.meta.auth)){
  //     // 对路由进行验证
  //     console.log("用户是否已登录"+store.state.isLogin)
  //     if(store.state.isLogin) { // 已经登陆
  //        // console.log("用户是否已登录"+store.getters.isLogin)
  //         next()
  //     }else{
  //         // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
  //         next({path:'/',query:{ referrer: to.fullPath} })  
  //     }
  // }else{
  //     next()
  // }
  
})
/* eslint-disable no-new 这是全局组件*/
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
