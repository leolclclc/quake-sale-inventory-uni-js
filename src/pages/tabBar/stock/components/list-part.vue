<template>
  <view
    style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx"
    @click="
      goTo(
        `/pages/tabBar/stock/components/list-order-detail?id=${order_id}&status=${status}`
      )
    "
  >
    <view
      style="
        width: 120rpx;
        height: 120rpx;
        background: rgba(138, 97, 255, 0.5);
        border-radius: 8rpx;
        flex-shrink: 0;
      "
    ></view>
    <view
      style="
        font-weight: 400;
        font-size: 24rpx;
        line-height: 34rpx;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 0;
      "
    >
      <text
        style="
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 6rpx;
        "
      >
        单据编号：{{ order_id }}
      </text>
      <text style="margin-bottom: 6rpx">仓库名称：{{ warehouse }}</text>
      <text>制单人：{{ prepared_by }}</text>
    </view>
    <view
      style="
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <view
        v-if="status === 1"
        style="
          color: white;
          font-weight: 600;
          font-size: 24rpx;
          line-height: 34rpx;
          background: #0da12e;
          width: 128rpx;
          height: 50rpx;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        全部入库
      </view>
      <view
        v-if="status === 0"
        style="
          color: white;
          font-weight: 600;
          font-size: 24rpx;
          line-height: 34rpx;
          background: #ff5d50;
          width: 128rpx;
          height: 50rpx;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        未入库
      </view>
      <view></view>
      <span style="font-size: 24rpx">
        {{ format_datatime(count_date) }}
      </span>
    </view>
  </view>
</template>
<script>
import moment from "moment";
export default {
  props: ["order_id", "warehouse", "prepared_by", "count_date", "status"],
  methods: {
    format_datatime(datatime) {
      if (moment().format("YYYY") === moment(datatime).format("YYYY")) {
        if (moment().diff(moment(datatime), "days") <= 2) {
          switch (moment().diff(moment(datatime), "days")) {
            case 0:
              return moment(datatime).format("今天 HH:mm");
            case 1:
              return moment(datatime).format("昨天 HH:mm");
            case 2:
              return moment(datatime).format("前天 HH:mm");

            default:
              break;
          }
        } else {
          return moment(datatime).format("MM月DD日");
        }
      } else {
        return moment(datatime).format("YYYY年MM月DD日");
      }
    },
    goTo(path) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style scoped>
.A {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
