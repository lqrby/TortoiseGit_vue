<template>
  <div id="app" v-cloak>
    <!-- <img src="./assets/logo.png"> -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    
    /* @import url('css/aui.css');
    @import url('css/aui-flex.css');
    @import url('css/mystyle.css'); */

</style>
