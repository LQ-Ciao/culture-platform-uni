<template>
  <view class="contain">
    <uni-forms :modelValue="formData">
      <uni-forms-item>
        <text>匿名投票</text>
      </uni-forms-item>
      <uni-forms-item>
        <button type="primary" @tap="agree">同意</button>
      </uni-forms-item>
      <uni-forms-item>
        <button type="warn" @tap="disagree">去你妈的</button>
      </uni-forms-item>
      <uni-forms-item>
        已有{{ agreeCount + disagreeCount }}人投票
      </uni-forms-item>

      <uni-forms-item>
        <button type="warn" @tap="result">查看结果</button>
      </uni-forms-item>
    </uni-forms>
    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog mode="base" message="成功消息" :duration="2000" :before-close="true" @close="this.$refs.popup.close()" @confirm="newGame">
        好人{{agreeCount}} : {{disagreeCount}}坏人，<br/>
        <view v-if="disagreeCount">坏人获胜！</view>
        <view v-else>好人获胜！</view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: [],
      agreeCount: 0,
      disagreeCount: 0,
    };
  },
  methods: {
    agree() {
      this.agreeCount += 1;
    },

    disagree() {
      this.disagreeCount += 1;
    },

    result() {
      // if (this.disagreeCount >= 1) {
        this.$refs.popup.open('center');
      // }
    },

    newGame() {
      this.agreeCount = 0;
      this.disagreeCount = 0;
      this.$refs.popup.close();
    }
  },
};
</script>

<style scoped src="/public/css/common.scss"></style>


