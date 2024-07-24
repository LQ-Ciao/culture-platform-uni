<template>
  <view>
    <image style="width: 100%;z-index: -1" mode="widthFix"
           src="https://s2.loli.net/2024/07/22/n6TM1GuHwAy28Rk.png">
    </image>

    <uni-card>
      <uni-row class="functionArea">
        <function-btn
            v-for="(item) in functionList"
            :iconPath="item.iconPath"
            :functionLabel="item.functionLabel"
            :span="8"
            @tap="handleFunctionTap(item.url)"
        >
        </function-btn>
      </uni-row>

      <sub-title title="精彩推荐"></sub-title>
      <base-news v-for="(item) in newsList"
                 :title="item.title"
                 :time="item.time"
                 :imgPath="item.imgPath"
                 class="news-item"
      ></base-news>

      <watch-more-btn @tap="watchMore"></watch-more-btn>
    </uni-card>
  </view>
</template>

<script>
import functionBtn from "../functionBtn.vue";
import subTitle from "../subTitle.vue";
import baseNews from "/public/components/baseNews.vue";
import watchMoreBtn from "/public/components/watchMoreBtn.vue";


export default {
  components: {
    functionBtn, subTitle, baseNews, watchMoreBtn
  },
  data() {
    return {
      value: '',
      functionList: [{
        iconPath: 'https://s2.loli.net/2024/07/22/kPmGEx89yZsHjTW.png'
        , functionLabel: '博物馆'
        , url: "/pages/index/travel/museum/museum"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/wqmTV7YL3EuhMnb.png'
        , functionLabel: '文旅景区'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/yZp7eCOjBWPUEw9.png'
        , functionLabel: '图书馆'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/qWlCiagnoK7GtXv.png'
        , functionLabel: '物质文化遗产'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ZEoK91HGkl84xhv.png'
        , functionLabel: '非物质文化遗产'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/tucDGXqKajLsUmT.png'
        , functionLabel: '参观导览'
        , url: "https://www.baidu.com"
      }],

      newsList: [{
        title: "海上丝绸之路是古代中西方文明通过海路，以商贸为依托，承载文化、艺术交流的和平之路。"
        , time: "2024年7月22日 15点24分"
        , imgPath: "https://s2.loli.net/2024/07/22/n6TM1GuHwAy28Rk.png"
      }, {
        title: "海上丝绸之路是古代中西方文明通过海路，以商贸为依托，承载文化、艺术交流的和平之路。"
        , time: "2024年7月22日 15点24分"
        , imgPath: "https://s2.loli.net/2024/07/22/n6TM1GuHwAy28Rk.png"
      }]
    }
  },
  methods: {
    handleFunctionTap(url) {
      uni.navigateTo({
        url: url,
      })
    },

    watchMore() {
      uni.navigateTo({
        url: "https://www.baidu.com"
      })
    }
  }
}
</script>

<style scoped src="/public/css/common.scss"></style>