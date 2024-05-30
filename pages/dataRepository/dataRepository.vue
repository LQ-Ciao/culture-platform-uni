<template>

</template>

<script>
export default {

  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    return {
    };
  },

  mounted() {
    this.getDataSource();
  },

  methods: {
    getDataSource() {
      let newDataList = []
      let current = 0
      if (this.dataList && this.dataList.length > 0) {
        for (let i = 0; i <= this.dataList.length - 1; i++) {
          if (i % this.carouselImgCount !== 0 || i === 0) {
            if (!newDataList[current]) {
              newDataList.push([this.dataList[i]])
            } else {
              newDataList[current].push(this.dataList[i])
            }
          } else {
            current++
            newDataList.push([this.dataList[i]])
          }
        }
      }
      this.dataList = [...newDataList]
    },
  }
};
</script>