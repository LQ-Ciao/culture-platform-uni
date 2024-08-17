<template>
  <view  @tap="toNewsPage">
    <image :src="this.imgPath" mode="widthFix" style="width: 100%"></image>
    <text>{{ this.title }}</text>
    <uni-row justify="space-between">
      <uni-col :span="12">
        <text>{{ this.newsType }}</text>
      </uni-col>
      <uni-col :span="12">
        <div style="text-align: right;">
          <text>{{ this.time }}</text>
        </div>
      </uni-col>
    </uni-row>
  </view>
</template>

<script>
export default {
  name: "news",
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
    newsType: {
      type: String,
      default: ''
    }
  },
  methods:{
    toNewsPage() {
      uni.navigateTo({
        url: '/pages/test/test?url=' + this.url
      })
    }
  }
}
</script>

<style scoped>

</style>