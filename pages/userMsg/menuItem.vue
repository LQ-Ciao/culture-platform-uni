<template>
  <view style="margin: 20px 0 20px">
  <uni-row class="menu-item">
    <uni-col :span="1" :offset="1">
      <uni-icons :type="iconType" size="30"></uni-icons>
    </uni-col>
    <uni-col :span="18" :offset="1">
      {{ menuText }}
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
      default: 'person-filled'
    },
    menuText: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>
.menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
</style>