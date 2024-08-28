<template>
  <uni-col :span="span">
    <view class="centered">
      <image :src="this.getImg(iconPath)" mode="aspectFill" class="function-icon"/>
    </view>
    <br/>
    <label class="centered-label">{{ functionLabel }}</label>
  </uni-col>
</template>

<script>
export default {
  data() {
    return {
      defaultImg: 'https://s2.loli.net/2024/08/22/7owOED1UZWIz5FP.gif',
    }
  },
  props: {
    span: {
      type: Number,
      default: 6
    },
    iconPath: {
      type: String,
      required: true
    },
    functionLabel: {
      type: String,
      required: true
    }
  },
  methods: {
    getImg(iconPath) {
      if (iconPath === '' || iconPath === null) {
        return this.defaultImg;
      }
      return iconPath;
    }
  }
}

</script>

<style lang="scss">
.text-center {
  text-align: center;
}


.centered-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.function-icon {
  height: 75px;
  width: 75px;
  padding: 0 10px 0 10px;
}

.centered {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.centered-label {
  margin: 6px 0 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 12px;
}
</style>
