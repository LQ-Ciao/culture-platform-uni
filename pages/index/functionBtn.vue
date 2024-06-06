<template>
  <el-col :span="6" style="margin-bottom: 20px">
    <el-row>
      <el-image :src="iconPath"/>
    </el-row>
    <div style="padding-top: 10px;text-align: center">
      <el-row>
        <label>{{ functionLabel }}</label>
      </el-row>
    </div>
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
  methods: {}
}

</script>

<style lang="scss">
.text-center {
  text-align: center;
}
</style>
