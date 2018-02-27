
<template>
    <div>
        <p>{{msg}}</p>
        <input v-myfocus >
    </div>
</template>

<script>

import {myfocus} from '@/directive/focus.js'
 export default {
    data() {
      return {
        msg:'你好'
      }
    }
 }
    </script>
