<template>
  <view class="background">
    <uni-row :gutter="50">
      <uni-col :span="24"
               v-for="(item,index) in areaList"
               @tap="tapHandler(item)"
      >
        <!--        <area-option :text="item.label"></area-option>-->
        <text class="areaName" @tap="tapHandler(item)">{{ item.label }}</text>
        <view class="divLine" v-if="index < areaList.length -1"></view>
<!--        <nut-divider v-if="index < areaList.length"/>-->
      </uni-col>

    </uni-row>
  </view>
</template>

<script>
import areaOption from "./areaOption.vue";

export default {
  components: {areaOption},
  data() {
    return {
      areaList: [
        {label: '福州市', url: 'https://wlj.fuzhou.gov.cn/'}
        , {label: '厦门市', url: 'https://wlj.xm.gov.cn/'}
        , {label: '漳州市', url: 'http://wlj.zhangzhou.gov.cn/'}
        , {label: '泉州市', url: 'http://cbtb.quanzhou.gov.cn/'}
        , {label: '三明市', url: 'http://wlj.sm.gov.cn/?mobile=1'}
        , {label: '南平市', url: 'https://whlyj.np.gov.cn/'}
        , {label: '龙岩市', url: 'https://wlj.longyan.gov.cn/'}
        , {label: '莆田市', url: ''}
        , {label: '宁德市', url: 'https://wlj.ningde.gov.cn/'}
        , {label: '平潭市', url: 'https://lfw.pingtan.gov.cn/'}
      ]
    }
  },
  methods: {
    tapHandler(item) {
      if (item.url === '' || item.url == null) {
        uni.showToast({
          title: '暂未开通',
          icon: 'error'
        })
        return
      }
      uni.navigateTo({
        url: '/pages/test/test?url=' + item.url
      })


    }


  }
}
</script>

<style scoped>
.background {
  padding: 50px 20px 0 20px;
  background-image: url('https://s2.loli.net/2024/08/30/BxC9PJZNclI26kj.png');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 800px;
}

.areaName {
  font-size: 24px;
  font-family: SimSun;
  font-weight: bolder;
  padding-left: 18px;
  color: #2d0b0b;
}

.divLine{
  background: #e2d2ba;
  width: 90%;
  height: 1rpx;
  margin: 15px 18px 15px 20px;
}
</style>
