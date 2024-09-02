<template>
  <view class="contain" style="background-image: url('https://s2.loli.net/2024/08/28/qrBN9EficdsHz4k.png')">
    <image src="https://s2.loli.net/2024/09/02/gLqCyPbxGmlBDAX.png" style="width: 100%;" mode="widthFix"/>

    <view class="button-container">
      <scroll-view scroll-x="true" :enhanced="true" :show-scrollbar="false" style="width: 95%">
        <view class="button-wrapper">
          <text
              :class="topicId === button.id ? 'selected-btn' : 'default-btn'"
              v-for="(button) in buttonList"
              :key="button.id"
              @click="selectButton(button.id)"
              style="margin-right: 24px;font-weight: bolder;font-family: serif"
              size="mini"
          >
            {{ button.name }}
          </text>
        </view>
      </scroll-view>
    </view>

    <view style="padding: 20px 20px 0 20px">
      <uni-row class="functionArea" :gutter="0">
        <function-btn
            v-for="item in artifactsList"
            :iconPath="item.img"
            :functionLabel="item.name"
            icon-size="100px"
            :span="8"
        >
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
        @tap="bannerTapHandler(banner.url)"
    >
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
      artifactsList: [
        {
          "id": 163,
          "code": "3501A01030024080100003",
          "category": "文化与自然遗产/博物馆/瓷器",
          "name": "明德化窑十八手准提坐像",
          "img": "https://192-168-154-7181-9p3p97oc71mow1.ztna-dingtalk.com/tmp_file/202408/01/1722500444_7107d1898b2f4382a7314688cfbcf9cb.png"
        }, {
          "id": 169,
          "code": "3501A01040024071500003",
          "category": "文化与自然遗产/博物馆/铜器",
          "name": "二十世纪嵌琅五彩花卉蝶瓶",
          "img": "https://192-168-154-7181-9p3p97oc71mow1.ztna-dingtalk.com/tmp_file/202408/19/1724054714_截屏2024-08-19 16.17.30.png"
        }, {
          "id": 174,
          "code": "3501A01010024071500002",
          "category": "文化与自然遗产/博物馆/玉石器、宝石",
          "name": "明碧玉双螭首啣环觚",
          "img": "https://192-168-154-7181-9p3p97oc71mow1.ztna-dingtalk.com/tmp_file/202408/19/1724054651_截屏2024-08-19 16.16.24.png"
        }, {
          "id": 177,
          "code": "3501A01030024080100002",
          "category": "文化与自然遗产/博物馆/瓷器",
          "name": "清景德镇窑粉彩瓜果纹碗",
          "img": "https://192-168-154-7181-9p3p97oc71mow1.ztna-dingtalk.com/tmp_file/202408/01/1722495914_61231145d0c749cfa752ff62057cd680.png"
        }, {
          "id": 163,
          "code": "3501A01030024080100003",
          "category": "文化与自然遗产/博物馆/瓷器",
          "name": "明德化窑十八手准提坐像",
          "img": "https://192-168-154-7181-9p3p97oc71mow1.ztna-dingtalk.com/tmp_file/202408/01/1722500444_7107d1898b2f4382a7314688cfbcf9cb.png"
        }, {
          "id": 169,
          "code": "3501A01040024071500003",
          "category": "文化与自然遗产/博物馆/铜器",
          "name": "二十世纪嵌琅五彩花卉蝶瓶",
          "img": "https://192-168-154-7181-9p3p97oc71mow1.ztna-dingtalk.com/tmp_file/202408/19/1724054714_截屏2024-08-19 16.17.30.png"
        }
      ],

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
          // 正式环境取消改行注释
          // this.artifactsList = res.result;

          for (var i = 0; i < this.artifactsList.length; i++) {
            let imgPath = this.artifactsList[i].img;
            imgPath = imgPath.replace("http://", "https://");
            if (this.artifactsList[i].name.length > 9) {
              // 超出部分以省略号显示
              this.artifactsList[i].name = this.artifactsList[i].name.substring(0, 9) + "..."
            }

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
  color: #37A09E;
}

.default-btn {
  flex: 0 0 auto; /* 确保按钮不会拉伸 */
  margin-right: 10px; /* 按钮之间的间距 */
}


</style>
