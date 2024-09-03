<template>
  <view class="contain">
    <view style="padding: 20px 20px 20px 20px">
      <uni-forms :modelValue="formData">
        <uni-row :gutter="20">
          <uni-col :span="10">
            <uni-data-select
                confirmType="search"
                :localdata="areaList"
                @change="change"
            ></uni-data-select>
          </uni-col>
          <uni-col :span="12">
            <uni-easyinput v-model="formData.param" clearable style="width: 100%"></uni-easyinput>
          </uni-col>
        </uni-row>
      </uni-forms>
    </view>
    <view>
      <base-banner v-for="item in museumList"
                   :title="item.title"
                   :imgPath="item.imgPath"
                   @tap="tapHandler(item)"
      ></base-banner>
    </view>
  </view>
</template>

<script>
import baseBanner from "/public/components/baseBanner.vue";
import {toLink, notNow} from "/utils/functionBtnHandler";

export default {
  components: {baseBanner},
  data() {
    return {
      param: '',
      formData: {
        areaId: '',
        param: ''
      },
      museumList: [
        {
          imgPath: 'https://s2.loli.net/2024/07/23/M8CdwhtqSTx6Q3F.png'
          , title: "福建省博物馆"
          , url: 'https://museum.fjsen.com'
        }, {
          imgPath: 'https://s2.loli.net/2024/07/23/s7uJkbARGDjmEpa.png',
          title: "福州市博物馆"
          , url: ""
        }, {
          imgPath: 'https://s2.loli.net/2024/07/23/TwYEVt9yzKd7Fqb.png'
          , title: "林则徐纪念馆"
          , url: ""
        }],
      areaList: [
        {value: 0, text: "福州市"}
        , {value: 1, text: "厦门市"}
        , {value: 2, text: "北京市"}
      ]
    }
  },
  methods: {
    change() {

    },

    tapHandler(museum) {
      if (museum.url === '' || museum.url === null) {
        notNow();
        return;
      }
      toLink(museum);
    },
  }
}
</script>

<style scoped src="/public/css/common.scss"></style>
<style>

</style>
