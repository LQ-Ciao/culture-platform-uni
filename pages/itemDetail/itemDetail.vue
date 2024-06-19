<template>
  <view style="padding: 30px 24px 0 24px">

    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
              :duration="duration">
        <swiper-item v-for="img in this.imgList">
          <image style="width: 100%" :src="img" mode="heightFix"/>
        </swiper-item>
      </swiper>
    </view>

    <view style="margin: 50px 0 40px 0">
      <view class="uni-padding-wrap uni-common-mt">
        <uni-segmented-control
            :current="current"
            :values="items"
            :style-type="styleType"
            activeColor="#007aff"
            @clickItem="onClickItem"/>
      </view>
    </view>

    <view style="margin-left: 24px;font-size: 18px;font-weight: bold">
      <text>资源详情</text>
    </view>

    <view class="introduce">
      <text >
        &emsp;&emsp;{{introduceText}}
      </text>
    </view>

  </view>
</template>

<script>
export default {
  data() {
    return {
      imgList: ["/static/temp/QQ截图20240618110635.png", "/static/temp/QQ截图20240618110635.png"],

      background: ['color1', 'color2', 'color3'],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,

      items: ['图像', '三维模型','视频'],
      current: 0,
      activeColor: '#007aff',
      styleType: 'button',

      introduceText:'敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。'

    }
  },

  onLoad(options) {
    this.id = options.id;
    this.name = options.name;
    console.log(this.id);
    console.log(this.name);
  },

  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex
      }

      if(e.currentIndex === 1) {
        console.log("三维模型");
      }

      if(e.currentIndex === 2) {
        console.log("视频");
      }
    },



  }
}
</script>

<style scoped>
.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
}

.swiper {
  height: 300rpx;
}

.uni-common-mt {
  margin-top: 60rpx;
  position: relative;
}

.uni-padding-wrap {
  width: 550rpx;
  padding: 0 100rpx;
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

.introduce{
  color: grey;
  margin: 30px 50px 0 50px;
  text-align: center;
}
</style>

