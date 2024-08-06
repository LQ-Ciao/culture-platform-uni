<template>
  <view>
    <button @tap="localTest">localTest</button>
  </view>

</template>

<script>
import api from '/api/api'

export default {

  data() {

  },

  methods: {
    localTest() {
      console.log('localTest');

      api.testOperate({}, 0).then(res => {
        console.log('res.data = ' + res.data);
        console.log(res);
      })
    },

  },
}
</script>
