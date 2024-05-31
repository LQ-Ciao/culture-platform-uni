<template>
  <!--  背景图片-->
  <div class="profile-card">
    <div class="profile-content">
      <el-avatar
          size="large"
          icon="el-icon-user"
          class="avatar">
      </el-avatar>
      <div class="user-info">
        <div class="phone-number">139****5217</div>
        <el-button type="primary" size="small">编辑资料</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: '',
    }
  },
  methods: {}
}
</script>


<style lang="scss">
.background-container {
  width: 100%;
  height: 300px;
  background-image: url('/static/QQ截图20240531102211.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.profile-card {
  background-image: url('/static/QQ截图20240531102211.png'); /* Replace with the actual path to your background image */
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
  text-align: center;
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
</style>
