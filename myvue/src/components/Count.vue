<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <p>{{count}}</p>
    <!-- <p>{{$store.state.count}}</p> -->
    <!-- <button @click="$store.commit('add',5)">+</button>
    <button @click="reduce">-</button> -->
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
  </div>
    
</template>

<script>
import store from '@/vuex/store';
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
export default {
  name: 'count',
  data () {
    return {
      msg: 'hello！你好啊'
    }
  },
  computed:{
    ...mapState(['count']),//状态值简写
    ...mapGetters(['count'])//过滤状态值简写
    
  },

  methods:{
    ...mapMutations(['add','reduce']),//同步调用方法的简写
    ...mapActions(['addAction','reduceAction'])//异步调用方法的简写
  },
  store
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
