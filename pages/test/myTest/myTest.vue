<template>
  <view>
    <button @tap="">uni原生request</button>
    <button @tap="fetchData">axios</button>
    <text>{{ requestResult }}</text>
  </view>

</template>

<script>


export default {

  data() {
    return {
      requestResult: '',
    }
  },

  methods: {
    fetchData() {
      api.test().then(res => {
        this.requestResult = res
      })
    }
  },
}
</script>
