<template>
  <view style="margin: 20px 0 20px">
    <uni-row class="menu-item">
      <uni-col :span="1" :offset="1" class="col-item">
        <text :class="iconType" style="font-size:20px"></text>
      </uni-col>
      <uni-col :span="18" :offset="1" class="col-item">
        <text>{{ menuText }}</text>
      </uni-col>
      <uni-col :span="1" class="col-item">
        <uni-icons type="forward" size="18"></uni-icons>
      </uni-col>
    </uni-row>
  </view>
</template>

<script>
export default {
  props: {
    iconType: {
      type: String,
      default: 'icon-account-information'
    },
    menuText: {
      type: String,
      default: ''
    },
  }
}
</script>
<style scoped src="/static/icomoon/style.css"></style>
<style scoped>
.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center; /* 竖直方向居中 */
  justify-content: flex-start; /* 水平方向左对齐 */
  margin-top: 10px;
}

.col-item {
  display: flex;
  align-items: center; /* 竖直方向居中 */
  justify-content: flex-start; /* 水平方向左对齐 */
}
</style>