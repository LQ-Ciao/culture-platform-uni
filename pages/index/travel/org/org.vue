<template>
  <view>
    <image src="https://s2.loli.net/2024/07/29/Pn9Vc6Dm1wjRS7K.png" style="width: 100%" mode="widthFix"></image>

    <uni-card>
      <sub-title text="场馆介绍"></sub-title>
      <view class="view-more-component">
        <image class="background-image" src="https://s2.loli.net/2024/07/29/xSqEPz9W8D6ulat.png"
               mode="widthFix"></image>
        <text class="view-more-text" style="color: #000000;font-size: 14px;width:80%">
          福建省博物院位于福建省福州市鼓楼区，是首批国家一级博物馆、公益一类事业单位，下设典藏部、陈列部、社教部、信息部、自然部等13个部门，占地约90亩，建筑面积约3.6万平方米，展厅面积约1.2万平方米。
        </text>
      </view>


      <sub-title text="参观须知"></sub-title>
      <view class="view-more-component">
        <image class="background-image" src="https://s2.loli.net/2024/07/29/hKRtkpSxLb1UinN.png"
               mode="widthFix"></image>
        <text class="view-more-text" style="color: #000000;font-size: 14px;width:80%">
          开放时间：每周二至周五09:00~18:00（17:30停止入场）<br>
          法定节假日及周末：09:00~20:00（19:30停止入场）<br>
          电话：0591-xxxxxxxx<br>
          地址：福建省福州市鼓楼区湖头街96号
        </text>
      </view>

      <sub-title text="典藏文物" :show-more-btn="true"></sub-title>


      <sub-title text="数字展览" :show-more-btn="true"></sub-title>

      <sub-title text="资讯活动" :show-more-btn="true"></sub-title>
      <base-news v-for="(item) in newsList"
                 :title="item.title"
                 :time="item.time"
                 :imgPath="item.imgPath"
                 class="news-item"
      ></base-news>
    </uni-card>
  </view>
</template>

<script>
import functionBtn from "/pages/index/functionBtn.vue";
import subTitle from "./subTitle.vue";
import baseNews from "/public/components/baseNews.vue";

export default {
  components: {
    baseNews,
    subTitle,
    functionBtn
  },

  data() {
    return {
      newsList: [{
        title: "海上丝绸之路是古代中西方文明通过海路，以商贸为依托，承载文化、艺术交流的和平之路。"
        , time: "2024年7月22日 15点24分"
        , imgPath: "https://s2.loli.net/2024/07/22/n6TM1GuHwAy28Rk.png"
      }, {
        title: "海上丝绸之路是古代中西方文明通过海路，以商贸为依托，承载文化、艺术交流的和平之路。"
        , time: "2024年7月22日 15点24分"
        , imgPath: "https://s2.loli.net/2024/07/22/n6TM1GuHwAy28Rk.png"
      }],

      artifactsList: [{
        id: '111',
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }, {
        id: '222',
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }],
    }
  },
  methods: {}
}
</script>

<style>
.view-more-component {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0 30px 0;
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

.button-wrapper {
  display: flex;
  padding-right: 24px; /* Ensure the last button is fully visible */
}

.centered {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button-container {
  display: flex;
  padding: 24px 24px 0 24px;
  flex-direction: row;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

.centered-label {
  margin: 6px 0 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
}

.function-icon {
  width: 100%;
  padding: 0 10px 0 10px ;
}
</style>
