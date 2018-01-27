import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    isLogin: false,  // 登录状态为没登录
    LoginedUser: {
        name: '',
        avatar: '',
        userName: ''
        
       }
}
// 创建改变状态的方法
const mutations = {
    //登录
    login(state){
        state.isLogin = true;
        // 然后去sessionStorage取用户数据
        let user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user);
        // 再把用户数据发下去
         state.LoginedUser.name = user.name;
         state.LoginedUser.avatar = user.avatar;
        state.LoginedUser.userName = user.userName;
        console.log("用户状态"+state.isLogin+"-------"+"用户名"+state.LoginedUser.userName)
        console.log("用户头像"+state.LoginedUser.avatar)

    },
    // 登出
    logout (state) {
        state.logined = false
        state.LoginedUser.name = ''
        state.LoginedUser.avatar = ''
        state.LoginedUser.userName = ''
    }

}
// 创建驱动actions可以使得mutations得以启动
const actions = {
    loginAction({commit}){
        commit('login');
    },
    // 同样来个logout
 logoutAction ({commit}) {
    commit('logout')
   }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})