<template>
  <view>
    <button @tap="localTest">localTest</button>
    <button @tap="globalTest">globalTest</button>
  </view>

</template>

<script>
import tApi from '/api/api'

export default {

  data() {

  },

  methods: {
    localTest() {
      console.log('localTest');

      tApi.testOperate({}, 0).then(res => {
        console.log('res.data = ' + res.data);
        console.log(res);
      })
    },

    globalTest() {
      let that = this;
      console.log('globalTest');

      that.$api.testOperate({}, 0).then(res => {
        console.log('res.data = ' + res.data);
        console.log(res);
      })
    }
  },
}
</script>
