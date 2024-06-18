<template>
  <view>
    <view class="center" style="height: 250px;" :style="{background: 'url('+backgroundUrl+')'}">
      <uni-row style="height: 100px">
        <uni-col :span="9">
          <image src="/static/icon/userMsg/default_avatar.png" style="width: 100px" mode="widthFix"/>
        </uni-col>

        <uni-col :span="15">
          <uni-row style="height: 100px">
            <uni-col>
              <text class="phoneNumber">
                {{ phoneNumber }}
              </text>
            </uni-col>
            <uni-col style="margin-top: 20px">
              <button plain="true" size="mini" style="border-radius: 25px;color: #ffffff">编辑资料</button>
            </uni-col>
          </uni-row>
        </uni-col>
      </uni-row>
    </view>

    <view>
      <uni-card>
        <uni-row>
          <uni-col :span="12" class="centerText">
            <view class="innerText">
              <text style="font-size: 50px">{{ collectCount }}</text>
              <br/>
              <text>收藏</text>
            </view>
          </uni-col>
          <uni-col :span="12" class="centerText">
            <view class="innerText">
              <text style="font-size: 50px">{{ thumbCount }}</text>
              <br/>
              <text>点赞</text>
            </view>
          </uni-col>
        </uni-row>
      </uni-card>
    </view>

    <view>
      <uni-card style="padding: 24px 0 24px 0">
        <view v-for="(item,index) in this.menuItems" style="margin: 24px 0 24px 0">
          <uni-row>
            <uni-col :span="3">
              <image :src="item.icon" style="width: 30px" mode="widthFix"/>
            </uni-col>
            <uni-col :span="20">
              <text class="menuText"> {{ item.label }}</text>
            </uni-col>
            <uni-col :span="1">
              <uni-icons type="right" size="30"></uni-icons>
            </uni-col>
          </uni-row>
          <view v-if="index< menuItems.length-1" class="divLine"></view>
        </view>
      </uni-card>
    </view>

    <view style="margin: 0 24px 0 24px">
      <button type="warn" size="large" class="logout-button">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      collectCount: 0,
      thumbCount: 0,
      phoneNumber: '13111111111',
      backgroundUrl: '/static/usrMsg_background.png',
      menuItems: [{
        label: "账号信息",
        icon: "/static/icon/userMsg/account.png",
        url: "",
      }, {
        label: "我的收藏",
        icon: "/static/icon/userMsg/collection.png",
        url: "",
      }, {
        label: "我的咨询",
        icon: "/static/icon/userMsg/consulting.png",
        url: "",
      }, {
        label: "我的评论",
        icon: "/static/icon/userMsg/comment.png",
        url: "",
      }]
    };
  },
  methods: {},
};
</script>

<style scoped>
.center {
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.phoneNumber {
  font-size: 20px;
  color: #fff;
}

.centerText {
  display: flex;
  justify-content: center;
}

.innerText {
  text-align: center;
  margin-top: 20px;
}

.menuText {
  font-size: 20px;
  color: #333333;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logout-button {
  width: 100%;
  border-radius: 40px;
}

/*分割线样式*/
.divLine {
  background: #E0E3DA;
  width: 100%;
  height: 1rpx;
}
</style>
