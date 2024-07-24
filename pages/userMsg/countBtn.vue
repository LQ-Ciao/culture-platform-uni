<template>
  <view class="view-more-component">
    <image class="background-image" :src="backgroundImage" mode="widthFix"></image>
    <view class="text-container">
      <uni-icons color="#ffffff" :type="iconType" size="30"></uni-icons>
      <text class="view-more-text">{{ text }}</text>
      <text class="view-more-count">{{ count }}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 0
    },
    iconType:{
      type: String,
      default: 'contact'
    }
  }
}
</script>

<style scoped>
.view-more-component {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 30px auto;
}

.background-image {
  width: 100%;
  z-index: 0;
}

.text-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  z-index: 1;
}

.view-more-text {
  color: white;
  font-size: 18px;
  margin-left: 10px;
}

.view-more-count {
  color: white;
  font-size: 18px;
  margin-left: auto;
  padding-right: 30px;
}
</style>
