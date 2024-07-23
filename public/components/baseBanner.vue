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
    }
  }
}
</script>

<style scoped>
.base-banner {
  position: relative;
  display: flex;
  align-items: center;
  width: 90%; /* Adjust as needed */
  margin: 30px auto;
}

.background-image {
  width: 100%;
  z-index: 0;
}

.view-more-text {
  position: absolute;
  left: 10px; /* Adjust as needed for horizontal alignment */
  color: #280e0c;
  font-size: 20px;
  font-weight: bold;
  z-index: 1;
  font-family: SimSun;
  display: flex;
  align-items: center;
  height: 100%; /* Ensure vertical centering */
}
</style>
