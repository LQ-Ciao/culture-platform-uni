<template>
  <view style="background-color: #fffbf5" class="contain">
    <uni-card>
      <image src="/static/icon/title_bg.png" style="width: 25px" mode="widthFix"></image>
      <text style="font-size: 25px"> 文旅服务</text>
      <view style="margin-top: 20px">
        <uni-row :gutter="50" class="functionArea">
          <function-btn
              v-for="item in functionList"
              :iconPath="item.iconPath"
              :functionLabel="item.functionLabel"
              :span="8"
              mode="widthFix"
              @tap="tapHandler(item)">
          </function-btn>
        </uni-row>
      </view>
    </uni-card>

    <uni-card>
      <image src="/static/icon/title_bg.png" style="width: 25px" mode="widthFix"></image>
      <text style="font-size: 25px"> 更多服务</text>
      <view style="margin-top: 20px;height: 200px;display: flex">
        <text>待接入</text>
      </view>
    </uni-card>
  </view>
</template>

<script>
import functionBtn from "../index/functionBtn.vue";
import {functionBtnHandler} from '/utils/functionBtnHandler.js';

export default {
  components: {
    functionBtn
  },
  data() {
    return {
      functionList: [{
        iconPath: 'https://s2.loli.net/2024/07/23/wPnAf47vVWYkI92.png'
        , functionLabel: '文化地图'
        , url: "/pages/dataRepository/map/map"
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/23/siKDGgq7pvQ9zlw.png',
        functionLabel: '游客分享',
        url: ""
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/23/l2gHMEeWdGrVjzR.png'
        , functionLabel: '沉浸式文旅'
        , url: "/pages/index/travel/travel"
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/23/Gw39jDOPVArCQ46.png'
        , functionLabel: '旅游攻略'
        , url: ""
        , type: '0'
      }, {
        iconPath: 'https://s2.loli.net/2024/07/23/UWLtNJOyhSzki7o.png',
        functionLabel: '景区服务',
        url: "/pages/index/org/org"
        , type: '0'
      }],
    }
  },
  methods: {
    tapHandler(item) {
      functionBtnHandler(item)
    }

  }
}
</script>

<style scoped src="/public/css/common.scss"></style>
