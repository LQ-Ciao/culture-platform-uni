<template>
  <view>

    <button @tap="testPage">测试按钮</button>

    <image style="width: 100%;z-index: -1" mode="widthFix" src="/static/banner_bg.png"></image>
    <view>
      <uni-card shadow="3"
                style="margin-top: -200px">
        <uni-row class="functionArea">
          <function-btn
              v-for="item in functionList"
              :key="item.iconPath"
              :iconPath="item.iconPath"
              :functionLabel="item.functionLabel"
              @tap="openExternalLink(item.url)">
          </function-btn>
        </uni-row>
      </uni-card>

      <view style="padding: 50px 24px 0 24px">
        <image src="/static/图层4.png"
               mode="widthFix"
               style="width: 100%"/>
      </view>


    </view>
  </view>
</template>

<script>

import functionBtn from "./functionBtn.vue";

export default {
  components: {
    functionBtn
  },
  data() {
    return {
      loading: false,
      functionList: [{
        iconPath: '/static/icon/index/红色文化.png'
        , functionLabel: '红色文化'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/文化应用.png'
        , functionLabel: '文化应用'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/沉浸式文旅.png'
        , functionLabel: '沉浸式文旅'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/闽文数仓.png'
        , functionLabel: '闽文数仓'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/数字资产.png'
        , functionLabel: '数字资产'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/闽文博藏.png'
        , functionLabel: '闽文博藏'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/闽文资讯.png'
        , functionLabel: '闽文资讯'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/更多.png'
        , functionLabel: '更多'
        , url: "https://www.baidu.com"
      }]
    }
  },

  methods: {
    testPage() {
      uni.navigateTo({
        url: "/pages/itemDetail/glbPage/glbPage",
      })
    },

    openExternalLink(url) {
      uni.navigateTo({
        url: "/pages/itemDetail/itemDetail?id=123&name=test",
      })
    },
  }
}

</script>
<style>
.functionArea {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


</style>