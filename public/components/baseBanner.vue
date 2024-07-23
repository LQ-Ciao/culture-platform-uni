<template>
  <view class="base-banner">
    <view v-for="item in items" :key="item.id">
      <image class="background-image" :src="item.img" mode="widthFix"></image>
      <text class="view-more-text">查看更多</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>


<style scoped>
.base-banner {
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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