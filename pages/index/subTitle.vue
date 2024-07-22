<template>
  <view class="indexTitle">
    <view class="indexTitle-text" >{{ title }}</view>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.indexTitle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://s2.loli.net/2024/07/19/t5cQfJOElq62HFp.png');
  background-size: 200px auto;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
}

.indexTitle-text {
  font-size: 20px;
  font-weight: bold;
}
</style>