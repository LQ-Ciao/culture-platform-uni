<template>
  <view class="view-more-component">
    <image class="background-image" src="https://s2.loli.net/2024/07/22/qV1WFnfjlBzu8K5.png" mode="widthFix"></image>
    <text class="view-more-text">查看更多</text>
  </view>
</template>

<style>
.view-more-component {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%; /* Adjust as needed */
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
