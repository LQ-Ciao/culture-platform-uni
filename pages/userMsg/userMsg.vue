<template>
  <el-card class="profile-card">
    <div class="profile-content">
      <el-avatar
          size="large"
          icon="el-icon-user"
          class="avatar">
      </el-avatar>
      <div class="user-info">
        <div class="phone-number">139****5217</div>
        <el-button size="small" round>编辑资料</el-button>
      </div>
    </div>
  </el-card>

  <div style="margin: 0 24px 0 24px">
    <el-card class="info-card">
      <el-row :gutter="30">
        <el-col :span="6" />
        <el-col :span="6">
          <div class="info-item">
            <div class="info-value">{{ collectCount }}</div>
            <div class="info-label">收藏</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="info-item">
            <div class="info-value">{{ thumbCount }}</div>
            <label class="info-label">点赞</label>
          </div>
        </el-col>
        <el-col :span="6" />
      </el-row>
    </el-card>
  </div>

  <div style="margin: 0 24px 0 24px">
    <el-card class="menu-card ">
      <el-menu class="el-menu-vertical-demo" router>
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">账号信息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-star-on"></i>
          <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-message"></i>
          <span slot="title">我的咨询</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-chat-line-round"></i>
          <span slot="title">我的评论</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>

  <div style="margin: 0 24px 0 24px">
    <el-button type="primary" size="large" class="logout-button" round>退出登录</el-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      collectCount: 0,
      thumbCount: 0,
    }
  },
  methods: {}
}
// Your script setup (if any)
</script>

<style scoped>
.profile-card {
  background-image: url('/static/QQ截图20240531102211.png'); /* Replace with the actual path to your background image */
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.phone-number {
  font-size: 24px;
  margin-bottom: 10px;
}

.info-card {
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
}

.info-item {
  text-align: center;
}

.info-value {
  font-size: 24px;
}

.info-label {
  color: gray;
}

.menu-card {
  padding: 0;
  margin-bottom: 20px;
}

.el-menu-vertical-demo {
  width: 100%;
}

.logout-card {
  text-align: center;
}

.logout-button {
  width: 100%;
}
</style>
