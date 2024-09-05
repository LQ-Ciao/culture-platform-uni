<template>
  <view class="contain" style="background-image: url('https://s2.loli.net/2024/09/02/K4Iy8PZ61SqEnMm.png')">
    <view style="height:100%">
      <base-banner
          v-for="banner in bannerList"
          img-path="https://s2.loli.net/2024/07/28/Qzt7DVw21MulYoZ.png"
          :title="banner.title"
          @tap="tapHandler(banner)"
      ></base-banner>
    </view>
  </view>
</template>

<script>

import baseBanner from "../../../public/components/baseBanner.vue";
import {toLink} from '/utils/functionBtnHandler.js';

export default {
  components: {baseBanner},
  data() {
    return {
      bannerList: [
        {title: '中国闽台缘博物馆', url: 'https://www.720yun.com/t/3cf2cxs8jes?scene_id=1330985'},
        {title: '福建省革命历史纪念馆', url: 'https://virtual.museum.chaoxing.com/fjhistory/?scene_id=37981639'},
        {title: '中苏（闽西）历史博物馆', url: 'https://cloud.pixelsay.cn/720/yijiyou/qita/22/index.html'}
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

