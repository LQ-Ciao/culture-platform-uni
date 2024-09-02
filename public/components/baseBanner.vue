<template>
  <view class="base-banner">
    <image class="background-image" :src="imgPath" mode="widthFix"></image>
    <text class="view-more-text">┃ {{ title }}</text>
  </view>
</template>

<script>
export default {
  props: {
    imgPath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },

}
</script>

<style scoped src="/public/css/common.scss"></style>
<style scoped>
.base-banner {
  position: relative;
  display: flex;
  align-items: center;
  width: 90%; /* Adjust as needed */
  margin: 10px auto;
}

.view-more-text {
  position: absolute;
  left: 10px; /* Adjust as needed for horizontal alignment */
  color: #2C0B0B;
  font-size: 18px;
  font-weight: bold;
  z-index: 1;
  font-family: serif;
  display: flex;
  align-items: center;
  height: 100%; /* Ensure vertical centering */
}
</style>
