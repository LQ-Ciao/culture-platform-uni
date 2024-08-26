<template>
  <view class="contain">
    <image src="https://s2.loli.net/2024/07/23/ztS59LHgnxpUIOl.png" style="width: 100%;" mode="widthFix"/>

    <view class="button-container">
      <scroll-view scroll-x="true"  :enhanced="true" :show-scrollbar="false" >
        <view class="button-wrapper">
          <button
              :class="topicId === button.id ? 'selected-btn' : 'default-btn'"
              v-for="(button) in buttonList"
              :key="button.id"
              @click="selectButton(button.id)"
              style="margin-right: 24px;"
              size="mini"
          >
            {{ button.name }}
          </button>
        </view>
      </scroll-view>
    </view>

    <view style="padding: 20px 20px 0 20px">
      <uni-row class="functionArea">
        <function-btn
            v-for="item in artifactsList"
            :iconPath="item.img"
            :functionLabel="item.name"
            :span="12">
        </function-btn>
      </uni-row>
    </view>

    <uni-row>
      <uni-col>
        <watch-more-btn @tap="watchMore"></watch-more-btn>
      </uni-col>
    </uni-row>

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
      topicId: null,
      buttonList: [],
      artifactsList: [],

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
    this.getCulturalRelics();
  },

  methods: {
    getTopic() {
      api.getTopics({}).then(res => {
        if (res.code === 0) {
          this.buttonList = res.result;
          this.buttonList.unshift({name: "全部", id: null});

          this.topicId = this.buttonList[0].id;
        }
      })
    },

    getCulturalRelics() {
      var param = {
        "topic_id": this.topicId,
      }
      api.getCulturalRelics(param).then(res => {
        if (res.code === 0) {
          this.artifactsList = res.result;

          for (var i = 0; i < this.artifactsList.length; i++) {
            let imgPath = this.artifactsList[i].img;
            imgPath = imgPath.replace("http://", "https://");

            this.artifactsList[i].img = imgPath;
          }
        }
      })
    },

    selectButton(value) {
      this.topicId = value;
      this.getCulturalRelics();
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

<style scoped src="/public/css/common.scss"></style>
<style>
.button-container {
  display: flex;
  padding: 24px 0 0 24px;
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
