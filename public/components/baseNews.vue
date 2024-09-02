<template>
  <view>
    <uni-row :gutter="20">
      <view style="margin: 10px 0 10px ">
      <uni-col :span="12">
        <text style="font-size: 14px">{{ titleShorten(title) }}</text>
        <text class="footerTime">{{ time }}</text>
      </uni-col>
      <uni-col :span="12">
        <image class="img" :src="imgPath" mode="aspectFill" style="width: 100%;height:75px; margin-bottom: 24px"></image>
      </uni-col>
      </view>
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
  },

  methods:{
    titleShorten(title) {
      var maxLength = 35;
      if(title.length > maxLength) {
        title = title.substring(0, maxLength) + '...'
      }
      return title
    }
  }
}
</script>

<style>
.footerTime{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 14px;
  color: #402120;
}

.img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>