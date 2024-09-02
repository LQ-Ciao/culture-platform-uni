<template>
  <view class="contain" style="background-image: url('https://s2.loli.net/2024/09/02/MSJA6hlydcmLIxT.png')">
    <image style="width: 100%;z-index: -1" mode="widthFix" src="https://s2.loli.net/2024/09/02/XmThaoHtWVC7Mjb.png">
    </image>

    <view style="padding: 20px 24px 0 24px">
      <uni-row class="functionArea">
        <function-btn v-for="item in functionList" :iconPath="item.iconPath" :functionLabel="item.functionLabel"
                      :span="8">
        </function-btn>
      </uni-row>

      <sub-title title="精彩资讯"></sub-title>
      <base-news v-for="item in newsList" :title="item.title" :time="item.time" :imgPath="item.imgPath"
                 class="news-item"></base-news>
      <watch-more-btn @tap="watchMore"></watch-more-btn>

      <sub-title title="典藏文物">

      </sub-title>
      <uni-row>
        <function-btn v-for="item in artifactsList" :iconPath="item.iconPath" :functionLabel="item.functionLabel"
                      :span="8">
        </function-btn>
      </uni-row>
      <watch-more-btn @tap="watchMore"></watch-more-btn>
    </view>
  </view>
</template>

<script>
import functionBtn from "../functionBtn.vue";
import subTitle from "../subTitle.vue";
import baseNews from "/public/components/baseNews.vue";
import watchMoreBtn from "/public/components/watchMoreBtn.vue";


export default {
  components: {
    functionBtn,
    subTitle,
    baseNews,
    watchMoreBtn
  },
  data() {
    return {
      value: '',
      functionList: [{
        iconPath: 'https://s2.loli.net/2024/07/22/5lDYTFPd7bUKEL1.png',
        functionLabel: '咨询',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/juIldaNRE7Z5JQ2.png',
        functionLabel: '文游',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/azPjbtIg1ZD6qLc.png',
        functionLabel: '历史',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/JcNpB2jf3YOIn5D.png',
        functionLabel: '特产',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/M8TuKCiNtA7eIWF.png',
        functionLabel: '非遗',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ZW85mSoHiFpyuUI.png',
        functionLabel: '品牌',
        url: "https://www.baidu.com"
      }],

      newsList: [{
        title: "海上丝绸之路是古代中西方文明通过海路，以商贸为依托，承载文化、艺术交流的和平之路。",
        time: "2024-7-22 15:24:00",
        imgPath: "https://s2.loli.net/2024/07/22/n6TM1GuHwAy28Rk.png"
      }, {
        title: "海上丝绸之路是古代中西方文明通过海路，以商贸为依托，承载文化、艺术交流的和平之路。",
        time: "2024-7-22 15:24:00",
        imgPath: "https://s2.loli.net/2024/07/22/n6TM1GuHwAy28Rk.png"
      }],

      artifactsList: [{
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png',
        functionLabel: '明德化窑白釉荷叶洗',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png',
        functionLabel: '明德化窑白釉荷叶洗',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png',
        functionLabel: '明德化窑白釉荷叶洗',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png',
        functionLabel: '明德化窑白釉荷叶洗',
        url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png',
        functionLabel: '明德化窑白釉荷叶洗',
        url: "https://www.baidu.com"
      }]
    }
  },
  methods: {
    watchMore() {
      uni.navigateTo({
        url: "https://www.baidu.com"
      })
    }
  }
}
</script>

<style scoped src="/public/css/common.scss"></style>