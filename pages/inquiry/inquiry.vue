<template>
  <div>
    <el-image class="defaultMargin" src="/static/QQ截图20240530163855.png" style="height: 300px;width:100%;"
              placeholder="福建中华文化数据库"/>
    <el-card class="defaultMargin" style="display: flex; justify-content: center;">
      <el-radio-group
          v-model="radioValue"
          size="large"
      >
        <el-radio-button label="0" style="align-items: center">闽文攻略</el-radio-button>
        <el-radio-button label="1" style="align-items: center">常见问题</el-radio-button>
      </el-radio-group>
    </el-card>


  </div>
</template>

<script>
export default {
  data() {
    return {
      radioValue: 0,
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.defaultMargin {
  margin: 0 24px 24px 24px
}

</style>
