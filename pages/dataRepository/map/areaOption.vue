<template>
  <view class="view-more-component">
    <image class="background-image" src="https://s2.loli.net/2024/07/24/XKoVuFr6yQw8Lhm.png" mode="widthFix"></image>
    <text class="view-more-text">{{ text }}</text>
  </view>
</template>

<script>
export default {
  props: {
    text: {
      default: '',
      type: String
    }
  }
}
</script>

<style>
.view-more-component {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 30px auto;
}

.background-image {
  width: 100%;
  z-index: 0;
}

.view-more-text {
  position: absolute;
  color: white;
  font-size: 18px;
  z-index: 1;
}
</style>
