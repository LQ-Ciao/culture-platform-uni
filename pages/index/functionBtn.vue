<template>
  <uni-col :span="6" style="margin-bottom: 20px" @click="this.handleClick">
    <uni-row>
      <up-image :src="iconPath"/>
    </uni-row>
    <up-row style="padding-top: 10px;text-align: center">
      <label>{{ functionLabel }}</label>
    </up-row>
  </uni-col>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
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
</style>
