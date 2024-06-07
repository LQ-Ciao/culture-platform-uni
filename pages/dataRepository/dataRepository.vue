<template>
  <div>
    <el-image src="../static/QQ截图20240530163855.png" style="height: 300px;width:100%"
              placeholder="福建中华文化数据库"/>

    <div class="button-container" style="margin: 24px 24px 24px 24px">
      <el-button
          size="large"
          v-for="button in buttonList"
          :key="button.value"
          :class="{ selected: selectedButton === button.value }"
          @click="selectButton(button.value)"
      style="margin: 0 24px 0 0">
        {{ button.label }}
      </el-button>
    </div>


  </div>
</template>

<script>

export default {

  props: {},

  data() {
    return {
      buttons: ['全部', '福建方志馆', '文化数据库', '福建历史博物馆', '历史文化', '确权分组'],
      selectedButton: 0,
      buttonList: [{
        label: "全部",
        value: 0,
      }, {
        label: "福建方志馆",
        value: 1,
      }, {
        label: "文化数据库",
        value: 2,
      }, {
        label: "福建历史博物馆",
        value: 3,
      }, {
        label: "历史文化",
        value: 4,
      }, {
        label: "确权分组",
        value: 5,
      }],
    };
  },

  mounted() {},

  methods: {
    selectButton(value) {
      this.selectedButton = value;

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

.button-container {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  scrollbar-width: none; /* Firefox */
}

.button-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.button-container > .el-button {
  flex: none;
}
.selected {
  background-color: #409EFF;
  color: white;
}
</style>