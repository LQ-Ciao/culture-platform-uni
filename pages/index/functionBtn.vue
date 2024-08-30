<template>
  <uni-col :span="span">
    <view class="centered">
      <image :src="this.getImg(iconPath)" :mode="mode" :style="iconStyle"/>
    </view>
    <br/>
    <text class="centered-label">{{ functionLabel }}</text>
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
    },
    iconSize: {
      type: String,
      default: '75px'
    },
    mode: {
      type: String,
      default: 'aspectFill'
    }
  },

  computed: {
    iconStyle() {
      return {
        height: this.iconSize,
        width: this.iconSize,
        borderRadius: '10px'
      };
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
