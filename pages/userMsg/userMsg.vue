<template>
  <view>
    <view :style="{background: 'url('+backgroundUrl+')'}">
      <uni-row class="baseMsg">
        <uni-col :span="8">
          <image src="/static/icon/userMsg/default_avatar.png" style="width: 125px" mode="widthFix"/>
        </uni-col>
        <uni-col :span="8">
          <uni-row>
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
            <text style="font-size:50px">{{ collectCount }}</text>
            <text>收藏</text>
          </uni-col>
          <uni-col :span="12" class="centerText">
            <text style="font-size:50px">{{ thumbCount }}</text>
            <text>点赞</text>
          </uni-col>

        </uni-row>
      </uni-card>
    </view>

    <view>
      <uni-card>
        <view v-for="(item,index) in this.menuItems">
          <uni-row class="menuItem">
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
.baseMsg {
  padding: 50px 0 50px 50px;
  display: flex;
  align-items: center;
}

.phoneNumber {
  font-size: 20px;
  color: #fff;
}

.centerText {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0 15px 0;
}

.centerText text {
  margin-bottom: 10px;
  font-size: 20px;
  color: #333333;
  padding-top: 10px;
}

.menuItem {
  margin: 24px 24px 24px 24px;
  display: flex;
  align-items: center;
}

.menuText {
  font-size: 20px;
  color: #333333;
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
