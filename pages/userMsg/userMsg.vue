<template>
  <view>
    <view class="header">
      <image src="https://s2.loli.net/2024/09/02/Tq2hAtWab89HLks.png"
             mode="widthFix"
             style="width: 100%;z-index: 0;"
      >
      </image>
      <view class="base-msg">
        <image :src="defaultAvatar" mode="widthFix" class="avatar"></image>
        <text class="username">{{ username }}</text>
        <button
            type="default" size="mini"
            style="background-color: #d9fffe">编辑资料
        </button>
      </view>
    </view>

    <view style="background-color: #fffbf5;padding: 20px 20px 20px 20px">
      <uni-row :gutter="50">
        <uni-col :span="12">
          <count-btn
              background-image="https://s2.loli.net/2024/07/23/7rHxT9bvEDa3YUF.png"
              text="收藏"
              :count="thumbCount"
              icon-type="hand-up-filled"
          ></count-btn>
        </uni-col>
        <uni-col :span="12">
          <count-btn
              background-image="https://s2.loli.net/2024/07/23/nzDAdpgsjPIbSfq.png"
              text="点赞"
              :count="collectCount"
              icon-type="star-filled"
          ></count-btn>
        </uni-col>
      </uni-row>

      <!--菜单-->
      <view style="margin-top: 20px">
        <menu-item v-for="item in menuList"
                   :icon-type="item.iconType"
                   :menu-text="item.menuText"
        ></menu-item>
      </view>

      <watch-more-btn text="退出登录"></watch-more-btn>

    </view>
  </view>
</template>

<script>
import countBtn from "./countBtn.vue";
import menuItem from "./menuItem.vue";
import watchMoreBtn from "/public/components/watchMoreBtn.vue";

export default {
  components: {countBtn, menuItem, watchMoreBtn},
  data() {
    return {
      defaultAvatar: 'https://s2.loli.net/2024/07/23/BqhJYG9RAFc54g7.png',
      username: "用户名",
      thumbCount: 0,
      collectCount: 0,
      menuList: [{
        iconType: "icon-account-information",
        menuText: "账号信息"
      }, {
        iconType: "icon-collection",
        menuText: "我的收藏"
      }, {
        iconType: "icon-consulting-service",
        menuText: "我的资讯"
      }, {
        iconType: "icon-comment",
        menuText: "我的评论"
      }]
    }
  }
}
</script>

<style scoped src="/static/icomoon/style.css"></style>
<style>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.base-msg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  color: white;
  font-size: 18px;
  padding-left: 20px;
  z-index: 1;
  width: 100%;
}

.avatar {
  width: 100px;
  height: 100px;
}

.username {
  margin-left: 20px
}

</style>