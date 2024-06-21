<template>
  <view class="scroll-page">
    <view class="list-cont">
      <scroll-view class="scroll-more" style="height: 100%" scroll-y="true" scroll-with-animation="true">
        <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
                :duration="duration">
          <swiper-item v-for="img in this.imgList">
            <image style="width: 100%" :src="img" mode="heightFix" @tap="openMediaFile"/>
          </swiper-item>
        </swiper>

        <view style="margin: 50px 0 40px 0">
          <view class="uni-padding-wrap uni-common-mt" >
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
          <text>&emsp;&emsp;{{ introduceText }}</text>
        </view>

        <view class="table">
          <baseTable :headers="headers" :data="tableData" :border="true" :stripe="true" hide-header="true"/>
        </view>
      </scroll-view>
    </view>

    <view class="footer">
      <uni-row inline="true">
        <uni-col :span="12">
          <uni-easyinput
              style="height: 20px"
              :clearable="true"
              prefixIcon="chat"
              placeholder="在线评论"
          />
        </uni-col>
        <uni-col :span="4" @tap="changeStarStatus">
          <uni-icons v-if="starStatus" type="star-filled" size="30"></uni-icons>
          <uni-icons v-else type="star" size="30"></uni-icons>
        </uni-col>
        <uni-col :span="4" @tap="changeThumbStatus">
          <uni-icons v-if="thumbStatus" type="hand-up-filled" size="30"></uni-icons>
          <uni-icons v-else type="hand-up" size="30"></uni-icons>
        </uni-col>
        <uni-col :span="4">
          <uni-icons type="redo" size="30"></uni-icons>
        </uni-col>
      </uni-row>
    </view>

  </view>
</template>

<script>
import BaseTable from "../../components/baseTable.vue";

export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      imgList: ["/static/temp/QQ截图20240618110635.png", "/static/temp/QQ截图20240618110635.png"],

      background: ['color1', 'color2', 'color3'],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      items: ['图像', '三维模型', '视频'],
      current: 0,
      activeColor: '#007aff',
      styleType: 'button',
      introduceText: '敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。敞口，斜腹，小圆足。',
      headers: [
        {label: '', value: 'label', align: 'center', dataAlign: 'center', width: '20%'},
        {label: '', value: 'data', align: 'left', dataAlign: 'right', width: '100px'},
      ],
      tableData: [
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '数据编码', data: '3501AAA1111'},
        {label: '文化数据标识码', data: '123456'}
      ],
      starStatus: true,
      thumbStatus: true,
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
      if (e.currentIndex === 1) {
        console.log("三维模型");
      }
      if (e.currentIndex === 2) {
        console.log("视频");
      }
    },


    openMediaFile() {
      if (this.current === 1) {
        uni.navigateTo({
          url: "/pages/itemDetail/glbPage/glbPage",
        })
      }
      if (this.current === 2) {
        console.log("打开视频");
      }
    },

    changeStarStatus() {
      this.starStatus = !this.starStatus;
    },

    changeThumbStatus() {
      this.thumbStatus = !this.thumbStatus;
    }

  }
}
</script>

<style lang="less">
page {
  width: 100%;
  height: 100%;
}


.scroll-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.header-cont {
  width: 100%;
  height: 110rpx;
  line-height: 100rpx;
  text-align: center;
  background: red;
}

.list-cont {
  flex: 1;
  position: relative;

  .scroll-more {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .list {
    height: 80rpx;
    line-height: 80rpx;
    text-align: center;
    background: #e0e0e0;

  }
}


.footer {
  color: #fff;
  line-height: 100rpx;
  flex: 0 0 100rpx;
  /* 不放大不缩小固定100rpx */
}

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

.uni-common-mt {
  margin-top: 10px;
}

.uni-padding-wrap {
  width: 75%;
}

.introduce {
  color: grey;
  margin: 30px 50px 0 50px;
  text-align: center;
  font-size: 12px;
}

.table {
  margin: 24px 24px 24px 24px;
}
</style>
