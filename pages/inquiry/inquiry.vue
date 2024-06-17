<template>
  <view>
    <image src="/static/闽文攻略_banner.png" style="width:100%;" mode="widthFix"/>
    <uni-card class="defaultMargin">
      <view class="radio-group-container">
        <view class="uni-padding-wrap uni-common-mt">
          <uni-segmented-control
              :current="current"
              :values="items"
              :style-type="styleType"
              :active-color="activeColor"
              @clickItem="onClickItem"/>
        </view>
      </view>
      <view>
        <uni-card v-if="current === 0" style="background-color: #f3f3f3">
          <text>
            <uni-icons type="right"/>数字资源版权确权方法
          </text>
        </uni-card>
        <uni-card v-if="current === 1" style="background-color: #f3f3f3">
          <text>
            <uni-icons type="right"/>
            海丝文脉中如何进行数字资源授权
          </text>
        </uni-card>
        <uni-card v-if="current === 1" style="background-color: #f3f3f3;margin-top: 24px">
          <text>
            <uni-icons type="right"/>
            三位数据加载慢如何解决
          </text>
        </uni-card>
      </view>
    </uni-card>
  </view>
</template>

<script>
export default {
  data() {
    return {
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
      activeColor: '#007aff',
      styleType: 'button'

    };
  },
  methods: {

    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex
      }
    },
  },
};
</script>

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

.content {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  justify-content: center;
  align-items: center;
  height: 150px;
  text-align: center;
}

</style>
