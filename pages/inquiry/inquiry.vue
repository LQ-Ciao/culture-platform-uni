<template>
  <view style="background: #fffbf5" class="contain">
    <view class="head-control">
      <uni-segmented-control
          style-type="text"
          :current="headControl"
          :values="items"
          active-color="#379799"
          @clickItem="headControlHandler">
      </uni-segmented-control>
    </view>

    <view v-if="headControl===0">
      <image src="https://s2.loli.net/2024/07/23/Op27qCFEuQbX4kH.png" style="width:90%;margin: 0 5% 0 5%"
             mode="widthFix"/>

      <view class="radio-group-container">
        <view class="uni-padding-wrap uni-common-mt">
          <uni-segmented-control
              :current="current"
              :values="items"
              style-type="button"
              active-color="#2d0b0b"
              @clickItem="onClickItem"/>
        </view>
      </view>

      <view>
        <base-banner
            v-for="banner in bannerList"
            img-path="https://s2.loli.net/2024/07/28/Qzt7DVw21MulYoZ.png"
            :title="banner.title"
            @tap="tapHandler()"
        ></base-banner>
      </view>
    </view>

    <view v-else>
      待设计
    </view>

    <view>
      <!-- 提示信息弹窗 -->
      <uni-popup ref="message" type="message">
        <uni-popup-message type="success" message="跳转预留" :duration="2000"></uni-popup-message>
      </uni-popup>
    </view>
  </view>

</template>

<script>
import baseBanner from "/public/components/baseBanner.vue";

export default {
  components: {baseBanner},
  data() {
    return {
      headControl: 0,
      items: ['闽文攻略', '常见问题'],
      styles: [{
        value: 'button',
        text: '按钮',
        checked: true
      },
        {
          value: 'text',
          text: '文字'
        }
      ],
      current: 0,
      activeColor: '#379799',
      bannerList: this.bannerList0,
      bannerList0: [
        {title: '数字资源版权确权方法'},
      ],
      bannerList1: [
        {title: '常见问题1'},
        {title: '常见问题2',}
      ]
    };
  },


  created() {
    this.bannerList = this.bannerList0;
  },

  methods: {


    tapHandler() {
      this.msgType = 'success'
      this.messageText = `这是一条消息提示`
      this.$refs.message.open()
    },

    headControlHandler(e) {
      if (this.headControl !== e.currentIndex) {
        this.headControl = e.currentIndex
      }
    },

    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex
      }
      if (this.current === 0) {
        this.bannerList = this.bannerList0
      } else {
        this.bannerList = this.bannerList1
      }
    },
  },
};
</script>

<style scoped src="/public/css/common.scss"></style>
<style scoped>
.defaultMargin {
  margin: 24px;
  border-radius: 10px;
}

.radio-group-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.uni-common-mt {
  margin-top: 10px;
}

.uni-padding-wrap {
  width: 75%;
}

.head-control {
  padding: 50px 0 20px;
}

</style>
