<template>
  <u-swipe-action class="contain">
    <u-swipe-action-item
      style="height: 100%; flex-grow: 1"
      :options="options"
      @click="delGoods(goodsRecord.id)"
    >
      <view class="contain2">
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
            {{ goodsRecord.goods_no }}
          </view>
          <view
            style="
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              width: 0;
            "
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
              {{ goodsRecord.sku_name }}
            </span>
            <span
              v-if="!goodsRecord.is_fresh"
              style="
                font-weight: 400;
                font-size: 24rpx;
                line-height: 44rpx;
                color: #b3b3b3;
              "
            >
              预设规格：{{ goodsRecord.sku_standards }}
            </span>
            <span
              v-if="!goodsRecord.is_fresh"
              style="
                font-weight: 400;
                font-size: 24rpx;
                line-height: 44rpx;
                color: #b3b3b3;
              "
            >
              商品条码:{{ goodsRecord.sku_code }}
            </span>
            <span
              v-if="goodsRecord.is_fresh"
              style="
                font-weight: 400;
                font-size: 24rpx;
                line-height: 44rpx;
                color: #b3b3b3;
              "
            >
              单价:{{ goodsRecord.SKU_Retail_Price }}/kg
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
            ￥{{ goodsRecord.sku_price }}
          </span>
        </view>
        <view v-if="!goodsRecord.is_fresh" class="part2">
          <span style="font-weight: 400; font-size: 28rpx; line-height: 40rpx">
            数量
          </span>
          <view style="display: flex; align-items: center">
            <view
              v-if="goodsRecord.is_box"
              style="
                font-weight: 400;
                font-size: 28rpx;
                line-height: 40rpx;
                margin-right: 16rpx;
              "
              >{{ goodsRecord.Box_Packing_Quantity }}/箱</view
            >
            <!-- <view style="display: flex; align-items: center"> -->
            <!-- <input
          type="text"
          style="font-size: 28rpx; text-align: right; padding: 0 8rpx"
          :value="value"
        /> -->
            <u-number-box
              integer
              :value="goodsRecord.number"
              step="1"
              @change="change"
            ></u-number-box>
          </view>
          <!-- <span style="font-weight: 400; font-size: 28rpx; line-height: 40rpx">
          件
        </span>
      </view> -->
        </view>
        <view v-if="goodsRecord.is_fresh" class="part2">
          <span style="font-weight: 400; font-size: 28rpx; line-height: 40rpx">
            重量
          </span>
          <!-- <view style="display: flex; align-items: center"> -->
          <!-- <input
          type="text"
          style="font-size: 28rpx; text-align: right; padding: 0 8rpx"
          :value="value"
        /> -->
          <!-- <u-number-box
        integer
        :value="goodsRecord.number"
        step="1"
        @change="change"
      ></u-number-box> -->
          <span style="font-weight: 400; font-size: 28rpx; line-height: 40rpx">
            {{ goodsRecord.weight }}
          </span>
        </view>
      </view>
    </u-swipe-action-item>
  </u-swipe-action>
</template>

<script>
export default {
  props: ["changeNumber", "index", "goodsRecord", "delGoods"],
  data() {
    return {
      options: [
        {
          text: "删除",
          style: {
            backgroundColor: "#f56c6c",
          },
        },
      ],
    };
  },
  methods: {
    change(val) {
      this.changeNumber(this.index, val.value);
    },
  },
};
</script>

<style scoped>
.contain {
  margin-bottom: 16rpx;
  flex-shrink: 0;
}
.contain2 {
  background: white;
  height: 248rpx;
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
