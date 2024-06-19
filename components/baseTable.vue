<template>
  <uni-table :border="border" :stripe="stripe" :emptyText="emptyText">
    <!-- 表头行 -->
    <uni-tr v-if="hideHeader">
      <uni-th
          v-for="(header, index) in headers"
          :key="index"
          :align="header.align"
          :style="{ width: header.width }"
      >
        {{ header.label }}
      </uni-th>
    </uni-tr>
    <!-- 表格数据行 -->
    <uni-tr v-for="(row, rowIndex) in data" :key="rowIndex">
      <uni-td
          v-for="(header, cellIndex) in headers"
          :key="cellIndex"
          :align="header.dataAlign"
      >
        {{ row[header.value] }}
      </uni-td>
    </uni-tr>
  </uni-table>
</template>

<script>
export default {
  name: 'baseTable',
  data() {
    return {
    }
  },

  props: {
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: '暂无更多数据'
    },
    headers: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(
            (header) =>
                typeof header.label === 'string' &&
                typeof header.value === 'string' &&
                typeof header.align === 'string' &&
                typeof header.dataAlign === 'string' &&
                (typeof header.width === 'string' || typeof header.width === 'number')
        );
      }
    },
    data: {
      type: Array,
      required: true
    },
    hideHeader: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped>
/* 添加必要的样式 */
</style>
