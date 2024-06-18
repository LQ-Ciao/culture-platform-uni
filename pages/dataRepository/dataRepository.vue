<template>
  <view>
    <image src="/static/中华文化数据库.png" style="width: 100%;" mode="widthFix"/>

    <scroll-view scroll-x="true" class="button-container" enhanced="true"	show-scrollbar="false">
      <view class="button-wrapper">
        <button
            :class="selectedButton === button.value ? 'selected-btn' : 'default-btn'"
            v-for="button in buttonList"
            :key="button.value"
            @click="selectButton(button.value)"
            style="margin-right: 24px;"
            size="mini"
        >
          {{ button.label }}
        </button>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      selectedButton: 0,
      buttonList: [
        { label: "全部", value: 0 },
        { label: "福建方志馆", value: 1 },
        { label: "文化数据库", value: 2 },
        { label: "福建历史博物馆", value: 3 },
        { label: "历史文化", value: 4 },
        { label: "确权分组", value: 5 },
        { label: "", value: 6 }
      ]
    };
  },
  methods: {
    selectButton(value) {
      this.selectedButton = value;
    }
  }
};
</script>

<style>
.button-container {
  display: flex;
  padding: 24px 24px 0 24px;
  flex-direction: row;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
}

.button-wrapper {
  display: flex;
  padding-right: 24px; /* Ensure the last button is fully visible */
}

scroll-view::-webkit-scrollbar {
  display: none;
}

.button-container .button {
  flex: 0 0 auto; /* 确保按钮不会拉伸 */
  margin-right: 10px; /* 按钮之间的间距 */
}

.selected-btn {
  flex: 0 0 auto; /* 确保按钮不会拉伸 */
  margin-right: 10px; /* 按钮之间的间距 */
  color: #fff;
  background-color: #007aff;
}

.default-btn {
  flex: 0 0 auto; /* 确保按钮不会拉伸 */
  margin-right: 10px; /* 按钮之间的间距 */
}
</style>
