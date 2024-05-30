<template>
  <div>
    <el-image src="" style="height: 300px;width:100%" placeholder="福建中华文化数据库"/>

    <el-radio-group
        v-model="radioValue"
        size="large"
        @change="changeRadio"
    >
      <el-radio-button
          v-for="(item) in radioList"
          :label="item.value">
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>


  </div>
</template>

<script>
import { ref } from 'vue'


export default {

  props: {},

  data() {
    return {
      radioValue: 0,
      radioList: [{
        label: "全部",
        value: 0,
      }, {
        label: "福建历史博物馆",
        value: 1
      }, {
        label: "历史文化",
        value: 2
      }, {
        label: "确权分组",
        value: 3
      }],
    };
  },

  mounted() {

  },

  methods: {
    changeRadio() {
      console.log(this.radioValue);


    }
  }
};
</script>

<style lang="scss">
.main-nav {
  display: flex;
}

.push {
  margin-left: auto;
}
</style>