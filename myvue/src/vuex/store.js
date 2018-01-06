import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:1
}

const mutations = {
    add(state,n){
        state.count+=n
    },
    reduce(state){
        state.count--
    }
}

const getters={
    count:function(){
        return state.count-=2;
    }
}

const actions={
    addAction(content){
        content.commit('add',10)
    },
    reduceAction(content){
        content.commit('reduce')
    }
}
export default new Vuex.Store({
    state,mutations,getters,actions
})
    
