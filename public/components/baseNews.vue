<template>
  <view>
    <uni-row :gutter="20" >
      <uni-col :span="14">
        <text>{{ title }}</text>
        <text class="footerTime">{{ time }}</text>
      </uni-col>
      <uni-col :span="10">
        <image class="img" :src="imgPath" mode="heightFix" style="height:100px;margin-bottom: 20px"></image>
      </uni-col>
    </uni-row>
  </view>
</template>
<script>
export default {
  name: "baseNews",
  props: {
    title: {
      type: String,
      default: ''
    },
    imgPath: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
  }
}
</script>

<style>
.footerTime{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>