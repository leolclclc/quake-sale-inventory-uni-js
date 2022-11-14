<template>
  <view class="contain">
    <view class="part1">
      <view
        style="
          width: 120rpx;
          height: 120rpx;
          background: rgba(138, 97, 255, 0.5);
          border-radius: 8rpx;
          margin-right: 16rpx;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 48rpx;
          font-weight: 700;
        "
      >
        {{ goods_no }}
      </view>
      <view
        style="display: flex; flex-direction: column; flex-grow: 1; width: 0"
      >
        <span
          style="
            font-weight: 400;
            font-size: 32rpx;
            line-height: 44rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
        >
          {{ sku_name }}
        </span>
        <span
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 44rpx;
            color: #b3b3b3;
          "
        >
          预设规格：{{ sku_standards }}
        </span>
        <span
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 44rpx;
            color: #b3b3b3;
          "
        >
          商品条码:{{ sku_code }}
        </span>
      </view>

      <span
        style="
          font-weight: 400;
          font-size: 32rpx;
          line-height: 44rpx;
          flex-shrink: 0;
        "
      >
        ￥{{ sku_price }}
      </span>
    </view>
    <view class="part2">
      <span style="font-weight: 400; font-size: 28rpx; line-height: 40rpx">
        盘点数量
      </span>
      <!-- <view style="display: flex; align-items: center"> -->
      <!-- <input
          type="text"
          style="font-size: 28rpx; text-align: right; padding: 0 8rpx"
          :value="value"
        /> -->
      <u-number-box
        integer
        :value="number"
        step="1"
        @change="change"
      ></u-number-box>
      <!-- <span style="font-weight: 400; font-size: 28rpx; line-height: 40rpx">
          件
        </span>
      </view> -->
    </view>
  </view>
</template>

<script>
export default {
  props: [
    "sku_name",
    "sku_price",
    "sku_code",
    "goods_no",
    "sku_standards",
    "number",
    "changeNumber",
    "index",
  ],
  methods: {
    change(val) {
      this.changeNumber(this.index, val.value);
    },
  },
};
</script>

<style scoped>
.contain {
  background: white;
  height: 248rpx;
  margin-bottom: 16rpx;
  flex-shrink: 0;
}
.part1 {
  padding: 19rpx 40rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.part2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40rpx;
}
</style>
