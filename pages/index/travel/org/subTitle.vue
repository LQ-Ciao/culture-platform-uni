<template>
  <view>
    <uni-row :gutter="20">
      <uni-col :span="1"></uni-col>
      <uni-col :span="3">
        <image src="https://s2.loli.net/2024/07/29/Yv2sDu8IZSqzcmk.png"
               style="width: 100%;" mode="widthFix"></image>
      </uni-col>
      <uni-col :span="16">
        <text style="font-size: 20px;font-weight: bold;font-family: SimSun;color: #280e0c;">{{ text }}</text>
      </uni-col>
      <uni-col :span="4">
        <text v-if="showMoreBtn">更多 ></text>
      </uni-col>

    </uni-row>

  </view>
</template>


<script>
export default {
  name: "subTitle",

  props: {
    text: {
      type: String,
      default: ""
    },
    showMoreBtn: {
      type: Boolean,
      default: false
    },
  }
}
</script>


<style scoped>

</style>