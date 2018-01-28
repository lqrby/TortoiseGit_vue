import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    isLogin: false,  // 登录状态为没登录
    LoginedUser: {
        name: '',
        avatar: '',//用户头像
        userName: ''
        
       }
}

// 创建改变状态的方法
const mutations = {
    //登录
    login(state){
        state.isLogin = true;
        // 然后去sessionStorage取用户数据
        state.LoginedUser = JSON.parse(sessionStorage.getItem('user'));
    },

    // 登出
    logout (state) {
        state.logined = false
        state.LoginedUser = ''
    }

}

const getters = {
    LoginedUser:function(state){
        return  state.LoginedUser = JSON.parse(sessionStorage.getItem('user'));
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
    actions,
    getters
})