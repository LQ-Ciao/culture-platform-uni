<template>
  <view class="contain">
  <web-view :src="url"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: ''
    }
  },
  onLoad(val) {
    this.url = val.url
  }
}
</script>

<style scoped src="/public/css/common.scss"></style>