<template>
  <view>
    <image src="https://s2.loli.net/2024/07/23/ztS59LHgnxpUIOl.png" style="width: 100%;" mode="widthFix"/>

    <scroll-view scroll-x="true" class="button-container" enhanced="true" show-scrollbar="false">
      <view class="button-wrapper">
        <button
            :class="selectedButton === button.id ? 'selected-btn' : 'default-btn'"
            v-for="(button,index) in buttonList"
            :key="button.id"
            @click="selectButton(button.id)"
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
        :title="banner.title"
        @tap="bannerTapHandler(banner.url)">
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
      selectedButton: 'qwe123',
      buttonList: [
        {label: "全部", id: '1'},
        {label: "福建方志馆", id: '2'},
        {label: "文化数据库", id: '3'},
        {label: "福建历史博物馆", id: '4'},
        {label: "历史文化", id: '5'},
        {label: "确权分组", id: '6'},
        {label: "", id: '7'}
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
        , url: ""
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/s7uJkbARGDjmEpa.png',
        title: "地方志"
        , url: ""
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/TwYEVt9yzKd7Fqb.png'
        , title: "统计数据公开"
        , url: ""
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/V3J2YxBAhs7UHni.png'
        , title: "文化地图"
        , url: "/pages/dataRepository/map/map"
      }]
    };
  },

  mounted() {
    this.selectedButton = this.buttonList[0].id;
  },

  methods: {
    selectButton(value) {
      this.selectedButton = value;
    },

    bannerTapHandler(url) {
      uni.navigateTo({
        url: url,
      })
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
