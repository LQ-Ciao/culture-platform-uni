<template>
  <view>
    <!--    <button @tap="myTest">test</button>-->
    <image style="width: 100%" mode="widthFix"
           src="https://s2.loli.net/2024/07/22/bQIWnFacmwJDB45.png">
    </image>

    <uni-card>
      <uni-row class="functionArea">
        <function-btn
            v-for="item in functionList"
            :iconPath="item.iconPath"
            :functionLabel="item.functionLabel"
            @tap="tapHandler(item)">
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
import { functionBtnHandler } from '/utils/functionBtnHandler.js';


export default {
  components: {
    functionBtn, subTitle, indexNews
  },
  data() {
    return {
      loading: false,
      functionList: [{
        iconPath: 'https://s2.loli.net/2024/07/19/QwlOnstkNbePMZ3.png'
        , functionLabel: '文化精品'
        , url: "/pages/index/artworks/artworks"
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/sDp3dKFHRCujLMf.png'
        , functionLabel: '红色应用'
        , url: '/pages/index/redApplications/redApplications'
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/28/tQy5hbWGuHXR82F.png'
        , functionLabel: '沉浸式文旅'
        , url: "/pages/index/travel/travel"
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/hy5cGF8BAwp2sJl.png'
        , functionLabel: '闽文数仓'
        , url: "/pages/dataRepository/dataRepository"
        , type: '1'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/ycKJdGNYPsVnLSw.png'
        , functionLabel: '数字资产'
        , url: ""
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/YNlfD58joOxASXZ.png'
        , functionLabel: '闽文博藏'
        , url: "/pages/index/org/org"
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/mC8dnp4SJvc2PhI.png'
        , functionLabel: '闽文资讯'
        , url: "https://wlt.fujian.gov.cn/wldt/btdt/"
        , type: '2'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/19/vodyLAZVDOa9Fwr.png'
        , functionLabel: '更多'
        , url: ""
        , type: '0'
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
        title: '福建成为启动地！CHC影迷电影频道地域人文电影展播发布会成功举办',
        imgPath: 'https://www.fjgdwl.com/upload/202408/15/202408151014570795.jpg',
        url: 'https://www.fjgdwl.com/news/show-30098.aspx',
        time: '2024-08-15',
        newsType: '文化动态',
      }, {
        title: '福建广电网络集团召开上半年经营分析会暨安全生产工作会议',
        imgPath: 'https://www.fjgdwl.com/upload/202407/31/202407311715585565.png',
        url: 'https://www.fjgdwl.com/news/show-30022.aspx',
        time: '2024-07-30',
        newsType: '文化动态',
      }]
    }
  },

  methods: {
    tapHandler(item) {
      functionBtnHandler(item);
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