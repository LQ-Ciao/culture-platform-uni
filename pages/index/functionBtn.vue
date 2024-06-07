<template>
  <el-col :span="6" style="margin-bottom: 20px" @click="handleClick">
    <el-row>
      <el-image :src="iconPath"/>
    </el-row>
    <el-row style="padding-top: 10px;text-align: center">
      <label>{{ functionLabel }}</label>
    </el-row>
  </el-col>
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
