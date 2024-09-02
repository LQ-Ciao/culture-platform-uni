<template>
  <view class="contain">
    <view style="height:100%;padding-top: 20px;background-image: url('https://s2.loli.net/2024/09/02/K4Iy8PZ61SqEnMm.png')">
    <function-btn
        v-for="item in artifactsList"
        :iconPath="item.iconPath"
        :functionLabel="item.functionLabel"
        :span="8">
    </function-btn>
  </view>
  </view>
</template>

<script>
import functionBtn from "../functionBtn.vue";

export default {
  components: {functionBtn},
  data() {
    return {
      buttonList: [
        {label: "全部", id: '1'},
        {label: "福建方志馆", id: '2'},
        {label: "文化数据库", id: '3'},
        {label: "福建历史博物馆", id: '4'},
        {label: "历史文化", id: '5'},
        {label: "确权分组", id: '6'},
        {label: "", id: '7'}
      ],

      artifactsList: [{
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }, {
        iconPath: 'https://s2.loli.net/2024/07/22/ICwzDNmMXUptJbL.png'
        , functionLabel: '明德化窑白釉荷叶洗'
        , url: "https://www.baidu.com"
      }],
    }
  },
  methods: {}
}
</script>

<style scoped src="/public/css/common.scss"></style>
<style lang="scss">
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
</style>
