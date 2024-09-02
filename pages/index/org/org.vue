<template>
  <view class="contain">
    <uni-card>
      <view style="margin-top: 10px">
        <image src="/static/icon/title_bg.png" style="width: 25px" mode="widthFix"></image>
        <text class="single-icon-subtitle"> 博物馆</text>
        <base-banner v-for="item in museumList"
                     :title="item.title"
                     imgPath="https://s2.loli.net/2024/07/23/M8CdwhtqSTx6Q3F.png"
                     @tap="tapHandler(item)"
        ></base-banner>
      </view>
    </uni-card>

    <uni-card>
      <view style="margin-top: 10px">
        <image src="/static/icon/title_bg.png" style="width: 25px" mode="widthFix"></image>
        <text class="single-icon-subtitle"> 纪念馆</text>
        <base-banner v-for="item in memorialList"
                     :title="item.title"
                     imgPath="https://s2.loli.net/2024/07/23/M8CdwhtqSTx6Q3F.png"
                     @tap="tapHandler(item)"
        ></base-banner>
      </view>
    </uni-card>

    <uni-card>
      <view style="margin-top: 10px">
        <image src="/static/icon/title_bg.png" style="width: 25px" mode="widthFix"></image>
        <text class="single-icon-subtitle"> 文旅景区</text>
        <base-banner v-for="item in tourismList"
                     :title="item.title"
                     imgPath="https://s2.loli.net/2024/07/23/M8CdwhtqSTx6Q3F.png"
                     @tap="tapHandler(item)"
        ></base-banner>
      </view>
    </uni-card>

    <uni-card>
      <view style="margin-top: 10px">
        <image src="/static/icon/title_bg.png" style="width: 25px" mode="widthFix"></image>
        <text class="single-icon-subtitle"> 图书馆</text>
        <base-banner v-for="item in libraryList"
                     :title="item.title"
                     imgPath="https://s2.loli.net/2024/07/23/M8CdwhtqSTx6Q3F.png"
                     @tap="tapHandler(item)"
        ></base-banner>
      </view>
    </uni-card>
  </view>
</template>

<script>
import BaseBanner from "/public/components/baseBanner.vue";
import {toLink} from "/utils/functionBtnHandler";

export default {
  components: {BaseBanner},
  data() {
    return {
      museumList: [
        {title: '福建省博物院', url: 'https://museum.fjsen.com',},
        {title: '泉州海外交通史博物馆', url: 'http://www.qzhjg.cn/wap/index.html'}
      ],
      memorialList: [
        {title: '古田会议纪念馆', url: 'http://www.gthyjng.com'},
        {title: '林则徐纪念馆', url: 'http://www.lzxjng.cn'}
      ],
      tourismList: [
        {title: '武夷山景区', url: 'https://www.wyschina.com/cn/#'},
        {title: '厦门鼓浪屿', url: 'http://www.glysyw.com/'}
      ],
      libraryList: [
        {title: '福建省图书馆', url: 'https://www.fjlib.net'},
        {title: '福建省少年儿童图书馆', url: 'http://116.62.208.130:8080'}
      ]

    }
  },
  methods: {
    tapHandler(item) {
      toLink(item);
    }
  }
}
</script>

<style scoped src="/public/css/common.scss"></style>

