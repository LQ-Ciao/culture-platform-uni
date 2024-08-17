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
          {{ button.name }}
        </button>
      </view>
    </scroll-view>
    <view style="padding: 20px 20px 0 20px">
      <function-btn
          v-for="item in artifactsList"
          :iconPath="item.img"
          :functionLabel="item.name"
          :span="8">
      </function-btn>
    </view>
    <watch-more-btn @tap="watchMore"></watch-more-btn>

    <base-banner
        v-for="banner in bannerList"
        :imgPath="banner.imgPath"
        :title="banner.name"
        @tap="bannerTapHandler(banner.url)">
    </base-banner>

  </view>
</template>

<script>
import watchMoreBtn from "/public/components/watchMoreBtn.vue";
import functionBtn from "../index/functionBtn.vue";
import baseBanner from "/public/components/baseBanner.vue";
import api from "/api/api";

export default {
  components: {functionBtn, watchMoreBtn, baseBanner},
  data() {
    return {
      selectedButton: 'qwe123',
      buttonList: [],
      // artifactsList:[],
      artifactsList: [{
        img: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , name: '明德化窑白釉荷叶洗'
        , url: ""
      }, {
        img: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , name: '明德化窑白釉荷叶洗'
        , url: ""
      }, {
        img: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , name: '明德化窑白釉荷叶洗'
        , url: ""
      }, {
        img: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , name: '明德化窑白釉荷叶洗'
        , url: ""
      }, {
        img: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , name: '明德化窑白釉荷叶洗'
        , url: ""
      }],


      bannerList: [{
        imgPath: 'https://s2.loli.net/2024/07/23/M8CdwhtqSTx6Q3F.png'
        , name: "福建省博物馆"
        , url: ""
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/s7uJkbARGDjmEpa.png',
        name: "地方志"
        , url: ""
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/TwYEVt9yzKd7Fqb.png'
        , name: "统计数据公开"
        , url: ""
      }, {
        imgPath: 'https://s2.loli.net/2024/07/23/V3J2YxBAhs7UHni.png'
        , name: "文化地图"
        , url: "/pages/dataRepository/map/map"
      }]
    };
  },

  mounted() {
    this.getTopic();
    // this.getCulturalResources();
  },

  methods: {
    getTopic() {
      api.getTopics({}).then(res => {
        if (res.code === 0) {
          this.buttonList = res.result;
          this.buttonList.unshift({name: "全部", id: '0'});
          this.selectedButton = this.buttonList[0].id;
        }
      })
    },

    getCulturalResources() {
      api.getCulturalResources({}).then(res => {
        if (res.code === 0) {
          this.artifactsList = res.result;
        }
      })
    },

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
