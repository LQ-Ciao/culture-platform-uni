<template>
  <div>
    <el-image src="/static/QQ截图20240530163855.png" style="height: 300px;width:100%;"
              placeholder="福建中华文化数据库"/>
    <el-card class="defaultMargin">
      <div class="radio-group-container">
        <el-radio-group
            v-model="radioValue"
            size="large"
            style=""
        >
          <el-radio-button label="0">闽文攻略</el-radio-button>
          <el-radio-button label="1">常见问题</el-radio-button>
        </el-radio-group>
      </div>
      <div>

        <el-card v-if="radioValue==='0'" style="width: 100%;background-color: #f3f3f3">
          <span>数字资源版权确权方法</span>
        </el-card>

        <el-card v-if="radioValue==='1'" style="width: 100%;background-color: #f3f3f3">
          <span>
           <el-icon><ArrowRightBold/></el-icon>
            海丝文脉中如何进行数字资源授权
          </span>
        </el-card>
        <el-card v-if="radioValue==='1'" style="width: 100%;background-color: #f3f3f3;margin-top: 24px">
          <span>三位数据加载慢如何解决</span>
        </el-card>
      </div>
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
  margin: 24px 24px 24px 24px;
  border-radius: 10px;
}

.radio-group-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
</style>
