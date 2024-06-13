<template>
  <div>
    <up-image width="100%" mode="widthFix" src="/static/head_pic.jpg" style="z-index: -1"></up-image>

    <div>
      <uni-card shadow="1px">
        <uni-row>
          <uni-col :span="6" style="margin-bottom: 20px">
            <uni-row>
              <uni-image src="/static/icon/index/1.jpg"></uni-image>
            </uni-row>
            <uni-row style="padding-top: 10px;text-align: center">
              <label>红色文化</label>
            </uni-row>
          </uni-col>
          <uni-col :span="6" style="margin-bottom: 20px">
            <uni-row>
              <uni-image src="/static/icon/index/2.png"></uni-image>
            </uni-row>
            <uni-row style="padding-top: 10px;text-align: center">
              <label>文化应用</label>
            </uni-row>
          </uni-col>
          <uni-col :span="6" style="margin-bottom: 20px">
            <uni-row>
              <uni-image src="/static/icon/index/3.jpg"></uni-image>
            </uni-row>
            <uni-row style="padding-top: 10px;text-align: center">
              <label>沉浸式文旅</label>
            </uni-row>
          </uni-col>
          <uni-col :span="6" style="margin-bottom: 20px">
            <uni-row>
              <uni-image src="/static/icon/index/4.png"></uni-image>
            </uni-row>
            <uni-row style="padding-top: 10px;text-align: center">
              <label>闽文数仓</label>
            </uni-row>
          </uni-col>
        </uni-row>


      </uni-card>


      <!--      <up-row gutter="60">-->
      <!--        <up-col :span="2" style="margin-bottom: 20px">-->
      <!--          <up-image src="/static/icon/index/1.jpg"></up-image>-->
      <!--        </up-col>-->
      <!--        <function-btn-->
      <!--            v-for="item in functionList"-->
      <!--            :key="item.iconPath" :iconPath="item.iconPath"-->
      <!--            :functionLabel="item.functionLabel"-->
      <!--            @click="openExternalLink(item.url)">-->
      <!--        </function-btn>-->
      <!--      </up-row>-->

    </div>
  </div>
</template>

<script>

import functionBtn from "./functionBtn.vue";

export default {
  components: {
    functionBtn
  },
  data() {
    return {
      functionList: [{
        iconPath: '/static/icon/index/1.jpg'
        , functionLabel: '红色文化'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/2.png'
        , functionLabel: '文化应用'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/3.jpg'
        , functionLabel: '沉浸式文旅'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/4.png'
        , functionLabel: '闽文数仓'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/5.png'
        , functionLabel: '数字资产'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/6.png'
        , functionLabel: '闽文博藏'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/7.png'
        , functionLabel: '闽文资讯'
        , url: "https://www.baidu.com"
      }, {
        iconPath: '/static/icon/index/8.png'
        , functionLabel: '更多'
        , url: "https://www.baidu.com"
      }
      ]
    }


  },

  methods: {
    openExternalLink(url) {
      const loadingInstance = ElLoading.service({
        fullscreen: true,
        text: '加载中，请稍候...'
      });

      setTimeout(() => {
        loadingInstance.close();
        window.location.href = url;
      }, 1000)
    },


  }
}

</script>