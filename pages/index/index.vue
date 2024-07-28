<template>
  <view>
    <image style="width: 100%" mode="widthFix"
           src="https://s2.loli.net/2024/07/22/bQIWnFacmwJDB45.png">
    </image>

    <uni-card>
      <uni-row class="functionArea">
        <function-btn
            v-for="item in functionList"
            :iconPath="item.iconPath"
            :functionLabel="item.functionLabel"
            @tap="openExternalLink(item.url)">
        </function-btn>
      </uni-row>

      <sub-title title="最新资源"></sub-title>
      <uni-row :gutter="20">
        <uni-col :span="6" v-for="item in recentNewsList">
          <image :src="item.iconPath" style="width:100%" mode="widthFix"></image>
        </uni-col>
      </uni-row>

      <!-- 地市专题 -->
      <view style="margin-top: 20px;margin-bottom: 30px">
        <image mode="widthFix" style="width:100%" src="https://s2.loli.net/2024/07/22/jZdoI7eg619SycY.png"
        @tap="toAreaThematic"></image>
      </view>

      <sub-title title="最新资讯"></sub-title>
      <view class="newsCard">
        <index-news v-for="item in newsList"
                    :title="item.title"
                    :imgPath="item.imgPath"
                    :url="item.url"
                    :time="item.time"
                    :newsType="item.newsType"
                    class="news-item"
        ></index-news>
      </view>
    </uni-card>
  </view>
</template>

<script>

import functionBtn from "./functionBtn.vue";
import subTitle from "./subTitle.vue";
import indexNews from "./indexNews.vue";

export default {
  components: {
    functionBtn, subTitle, indexNews
  },
  data() {
    return {
      loading: false,
      functionList: [{
        iconPath: 'https://s2.loli.net/2024/07/19/QwlOnstkNbePMZ3.png'
        , functionLabel: '红色文化'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/sDp3dKFHRCujLMf.png'
        , functionLabel: '红色应用'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/28/tQy5hbWGuHXR82F.png'
        , functionLabel: '沉浸式文旅'
        , url: "/pages/index/travel/travel"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/hy5cGF8BAwp2sJl.png'
        , functionLabel: '闽文数仓'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/ycKJdGNYPsVnLSw.png'
        , functionLabel: '数字资产'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/YNlfD58joOxASXZ.png'
        , functionLabel: '闽文博藏'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/mC8dnp4SJvc2PhI.png'
        , functionLabel: '闽文资讯'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/vodyLAZVDOa9Fwr.png'
        , functionLabel: '更多'
        , url: "https://www.baidu.com"
      }],

      recentNewsList: [{
        iconPath: "https://s2.loli.net/2024/07/22/uhdyCGgfq927Ujv.png",
      }, {
        iconPath: "https://s2.loli.net/2024/07/22/CSmXYO5QsRknJqL.png",
      }, {
        iconPath: "https://s2.loli.net/2024/07/22/cJxGfteozWDMVEZ.png",
      }, {
        iconPath: "https://s2.loli.net/2024/07/22/KiAdBGS4vFZ6YV3.png",
      }],

      newsList: [{
        title: '福建广电网络集团举办深化运用“四下基层”制度推进乡村征信服务团balabalabala',
        imgPath: 'https://s2.loli.net/2024/07/22/qv45WI9rpmkYNug.png',
        url: 'www.baidu.com',
        time: '2024-07-22',
        newsType: '文化动态',
      }, {
        title: '福建广电网络集团举办深化运用“四下基层”制度推进乡村征信服务团balabalabala',
        imgPath: 'https://s2.loli.net/2024/07/22/qv45WI9rpmkYNug.png',
        url: '',
        time: '2024-07-22',
        newsType: '文化动态',
      }]
    }
  },

  methods: {
    openExternalLink(url) {
      uni.navigateTo({
        url: url,
      })
    },

    toAreaThematic() {
      uni.navigateTo({
        url: "/pages/index/areaThematic/areaThematic"
      })
    }
  }
}

</script>
<style scoped src="/public/css/common.scss"></style>
<style scoped lang="scss">

.newsCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 10px 10px;
  background-color: #fbf4e8;
  border-radius: 10px;
}


</style>