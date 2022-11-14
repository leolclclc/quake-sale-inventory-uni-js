<template>
  <view class="context">
    <view class="status_bar"></view>
    <view class="title">
      <image
        src="@/static/avatar.png"
        alt=""
        style="width: 56rpx; height: 56rpx"
        @click="goTo('/pages/management-side/index/index')"
      />
      <span style="color: #ffffff; font-size: 32rpx">小进销存</span>
      <view></view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style scoped>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}
.context {
  background: linear-gradient(123.74deg, #8489ff 6.08%, #8a61ff 96.16%);
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88rpx;
  margin: 0 36rpx 0 36rpx;
}
</style>
