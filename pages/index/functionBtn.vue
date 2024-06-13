<template>
  <uni-col :span="6" class="centered-col" @click="this.handelClick">
    <uni-row class="centered-row">
      <image :src="iconPath" mode="widthFix" class="centered-image"/>
    </uni-row>
    <uni-row style="">
      <label>{{ functionLabel }}</label>
    </uni-row>
  </uni-col>
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

.centered-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.centered-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.centered-image {
  width: 50px;
}
</style>
