<template>
  <view class="pay-part">
    <view>
      <span
        style="
          font-weight: 400;
          font-size: 28rpx;
          line-height: 40rpx;
          margin-bottom: 40rpx;
        "
        >收款金额</span
      >
      <view style="display: flex; align-items: center">
        <span style="font-size: 56rpx; font-weight: 700">￥</span>
        <input
          type="number"
          v-model="paymentPrice"
          style="
            border: 0rpx;
            font-weight: 700;
            padding: 16rpx 0;
            display: block;
            font-size: 56rpx;
          "
          auto-focus="true"
        />
        <!-- <u-input
        type="number"
        border="surround"
        v-model="paymentPrice"
        fontSize="56rpx"
        style="border: 0rpx; font-weight: 700; padding: 16rpx 0; display: block"
        focus
      >
      </u-input> -->
      </view>
      <view
        style="
          font-weight: 400;
          font-size: 28rpx;
          line-height: 40rpx;
          padding: 40rpx 0;
          border-top: 1rpx #ebebeb solid;
        "
        >找零<span style="color: #ff5d50; font-weight: 700; padding: 0 8rpx">
          {{ giveChange }} </span
        >元</view
      >
    </view>
    <view @click="goToScan" class="save">确定</view>
    <view @click="test" class="save">test</view>
  </view>
</template>

<script>
import { get_open_body_sig_js } from "@/utils/help";
import moment from "moment";
export default {
  data() {
    return {
      price: 0,
      paymentPrice: "",
    };
  },
  computed: {
    giveChange() {
      if (Number(this.paymentPrice) - this.price > 0) {
        return Number(this.paymentPrice) - this.price;
      } else {
        return 0;
      }
    },
  },
  methods: {
    goToScan() {
      uni.scanCode({
        scanType: ["barCode"],
        success: function (res) {
          const format_body = {
            // 商户号
            merchantCode: "123456789900081",
            // 终端号
            terminalCode: "00810001",
            // 交易金额
            transactionAmount: 1,
            // 交易币种
            transactionCurrencyCode: 156,
            // 商户订单号
            merchantOrderId:
              moment().format("YYYYMMDDHHmmss") +
              (Math.random() * 100000).toFixed(0),
            // 商户备注
            merchantRemark: "11",
            // 支付方式
            payMode: "CODE_SCAN",
            // 支付码
            payCode: res.result,
            // 设备类型
            deviceType: "11",
            // 终端设备IP地址
            ip: uni.getStorageSync("quake_sales_inventory_config").ip,
          };

          const open_body_sig = get_open_body_sig_js(
            "f0ec96ad2c3848b5b810e7aadf369e2f",
            "775481e2556e4564985f5439a5e6a277",
            format_body
          );

          uni.request({
            url: "https://test-api-open.chinaums.com/v4/poslink/transaction/pay",
            method: "POST",
            data: format_body,
            header: {
              Authorization: open_body_sig, //自定义请求头信息
            },
            success: ({ data }) => {
              uni.showToast({
                title: "成功收款" + JSON.stringify(data),
                duration: 5000,
              });
            },
          });
        },
      });
    },
  },
  onLoad(option) {
    this.price = Number(option.price);

    // const res = get_open_body_sig(
    //   "8a81c1be831e62880183c6537f4d1bc8",
    //   "31cce8efd439471b9badc07468137224",
    //   "{}"
    // );
    // console.log("res", res);
  },
};
</script>

<style scoped>
.pay-part {
  padding: 80rpx 56rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.save {
  padding: 8px 0;
  background: #8a61ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  color: #ffffff;
}
</style>