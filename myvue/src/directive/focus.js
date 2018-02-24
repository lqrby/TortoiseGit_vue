import Vue from 'vue'
// 注册一个全局自定义指令 `v-focus`
const focus = Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      const input = el.getElementsByTagName("input")
      input[0].focus()
      //el.setAttribute('placeholder','自定义内容');
    }
  })
  
  const myfocus = Vue.directive('myfocus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
        el.focus()
      //el.setAttribute('placeholder','自定义内容');
  }
  })
  export {focus,myfocus}