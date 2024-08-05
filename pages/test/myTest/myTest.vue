<template>
  <view>
    <button @tap="">uni原生request</button>
    <button @tap="fetchData">axios</button>
    <button @tap="lunchHandler">lunch-request-test</button>
    <text>{{ requestResult }}</text>
  </view>

</template>

<script>

import { apiTest } from "@/api/index";

export default {

  data() {
    return {
      requestResult: '',
    }
  },

  methods: {
    lunchHandler() {
      apiTest().then((res)=>{
        console.log('res.data = ' + res.data);
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
}
</script>
