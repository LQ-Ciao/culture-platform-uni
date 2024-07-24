<template>
  <view class="background">
    <uni-row :gutter="50">
      <uni-col :span="12"
               v-for="item in areaList"
      >
        <area-option :text="item.label"></area-option>
      </uni-col>

    </uni-row>
  </view>
</template>

<script>
import areaOption from "./areaOption.vue";

export default {
  components: {areaOption},
  data() {
    return {
      areaList: [
        {label: '福州市'}
        , {label: '厦门市'}
        , {label: '莆田市'}
        , {label: '三明市'}
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.background {
  padding: 125px 20px 0 20px;
  background-image: url('https://s2.loli.net/2024/07/24/bd3B9MUraPOyDLR.png');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 600px;
}
</style>
