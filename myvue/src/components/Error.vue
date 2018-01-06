<template>
  <div>
      <!-- <ul class="aui-list aui-form-list">
          <li class="aui-list-item direction aui-padding-height-half">
                    <h2 v-text="msg"></h2>
                    页面不存在！
            </li>
      </ul> -->
        <ul class="aui-flex-row aui-flex-item-12 aui-flex-auto aui-flex-middle aui-flex-center">
          <li class="">
                    <h2 v-text="msg"></h2>
                    页面不存在！
            </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'hi4',
  data(){
      return {
          msg:'Error:404'
      }
  }
}
</script>

<style scoped>
    h2{
        color:blueviolet;
    }

</style>
