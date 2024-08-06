<template>
  <view>
    <button @tap="">uni原生request</button>
    <button @tap="fetchData">axios</button>
    <button @tap="lunchHandler">lunch-request-test</button>
    <button @tap="paramTest">lunch-request-param-test</button>
    <button @tap="postTest">lunch-request-post</button>
    <button @tap="removeTest">lunch-request-remove</button>
    <button @tap="globalTest">globalTest</button>
  </view>

</template>

<script>

import {apiTest, paramTest, postTest, removeTest} from "@/api/index";

export default {

  data() {

  },

  methods: {
    lunchHandler() {
      apiTest().then((res) => {
        console.log('res.data = ' + res.data);
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    },

    globalTest() {
      this.$api.testOperate({}, 0).then(res => {
        console.log('res.data = ' + res.data);
        console.log(res);
      })
    },


    paramTest() {
      var param = {
        id: '1',
        name: '用户',
      }
      paramTest(param).then((res) => {
        console.log('res.data = ' + res.data);
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    },

    postTest() {
      var param = {
        id: '1',
        name: '用户',
      }
      postTest(param).then((res) => {
        console.log('res.data = ' + res.data);
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    },

    removeTest() {
      var param = {
        id: '1',
      }
      removeTest(param).then((res) => {
        console.log('res.data = ' + res.data);
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    }

  },
}
</script>
