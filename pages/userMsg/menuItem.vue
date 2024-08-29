<template>
  <view style="margin: 20px 0 20px">
  <uni-row class="menu-item">
    <uni-col :span="1" :offset="1">
      <text :class="iconType" style="font-size: 30px"></text>
    </uni-col>
    <uni-col :span="18" :offset="1">
      <text>{{ menuText }}</text>
    </uni-col>
    <uni-col :span="1">
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
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}
</style>