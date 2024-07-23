<template>
  <view>
    <image src="https://s2.loli.net/2024/07/23/ztS59LHgnxpUIOl.png" style="width: 100%;" mode="widthFix"/>

    <scroll-view scroll-x="true" class="button-container" enhanced="true" show-scrollbar="false">
      <view class="button-wrapper">
        <button
            :class="selectedButton === button.value ? 'selected-btn' : 'default-btn'"
            v-for="button in buttonList"
            :key="button.value"
            @click="selectButton(button.value)"
            style="margin-right: 24px;"
            size="mini"
        >
          {{ button.label }}
        </button>
      </view>
    </scroll-view>
    <view style="padding: 20px 20px 0 20px">
      <function-btn
          v-for="item in artifactsList"
          :iconPath="item.iconPath"
          :functionLabel="item.functionLabel"
          :span="8">
      </function-btn>
    </view>
    <watch-more-btn @tap="watchMore"></watch-more-btn>


    <base-banner
        v-for="banner in bannerList"
        :imgPath="banner.imgPath"
        :title="banner.title">
    </base-banner>

  </view>
</template>

<script>
import watchMoreBtn from "/public/components/watchMoreBtn.vue";
import functionBtn from "../index/functionBtn.vue";
import baseBanner from "/public/components/baseBanner.vue";

export default {
  components: {functionBtn, watchMoreBtn, baseBanner},
  data() {
    return {
      selectedButton: 0,
      buttonList: [
        {label: "全部", value: 0},
        {label: "福建方志馆", value: 1},
        {label: "文化数据库", value: 2},
        {label: "福建历史博物馆", value: 3},
        {label: "历史文化", value: 4},
        {label: "确权分组", value: 5},
        {label: "", value: 6}
      ],

      artifactsList: [{
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
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }],


      bannerList: [{
        imgPath: 'https://s2.loli.net/2024/07/23/M8CdwhtqSTx6Q3F.png'
        , title: "福建省博物馆"
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/s7uJkbARGDjmEpa.png',
        title: "地方志"
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/TwYEVt9yzKd7Fqb.png'
        , title: "统计数据公开"
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/V3J2YxBAhs7UHni.png'
        , title: "文化地图"
      }]
    };
  },
  methods: {
    selectButton(value) {
      this.selectedButton = value;
    },

    watchMore() {

    }
  }
};
</script>

<style>
.button-container {
  display: flex;
  padding: 24px 24px 0 24px;
  flex-direction: row;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

.button-wrapper {
  display: flex;
  padding-right: 24px; /* Ensure the last button is fully visible */
}

scroll-view::-webkit-scrollbar {
  display: none;
}

.button-container .button {
  flex: 0 0 auto; /* 确保按钮不会拉伸 */
  margin-right: 10px; /* 按钮之间的间距 */
}

.selected-btn {
  flex: 0 0 auto; /* 确保按钮不会拉伸 */
  margin-right: 10px; /* 按钮之间的间距 */
  color: #fff;
  background-color: #007aff;
}

.default-btn {
  flex: 0 0 auto; /* 确保按钮不会拉伸 */
  margin-right: 10px; /* 按钮之间的间距 */
}


</style>
