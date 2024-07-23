<template>
  <uni-col :span="span" @click="this.handelClick">
    <view class="centered">
      <image :src="iconPath" mode="widthFix" class="function-icon"/>
    </view>
    <br/>
    <label class="centered-label">{{ functionLabel }}</label>
  </uni-col>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    span:{
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
    handelClick() {
      this.$emit('click');
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
  width: 100%;
  padding: 0 10px 0 10px ;
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
}
</style>
