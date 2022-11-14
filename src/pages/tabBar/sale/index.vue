<template>
  <view
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    style="height: 100%"
  >
    <title-navigation></title-navigation>
    <money-card></money-card>
    <!-- 单据 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        单据
      </text>
      <u-grid class="bill_part2" :border="false" col="4">
        <u-grid-item
          class="bill_grid"
          @click="goTo('/pages/tabBar/sale/components/add-order')"
        >
          <image src="@/static/order.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">订单</text>
        </u-grid-item>
        <u-grid-item
          class="bill_grid"
          @click="goTo2('/pages/tabBar/sale/components/add-retail-list')"
        >
          <image src="@/static/Retaillist.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">零售单</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Outboundorder.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">出库单</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/ReturnOrder.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">退货单</text>
        </u-grid-item>
      </u-grid>
    </view>
    <!-- 列表 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        列表
      </text>
      <u-grid class="bill_part2" :border="false" col="4">
        <u-grid-item class="bill_grid">
          <image src="@/static/order2.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">订单</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Retail.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">零售</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Issue.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">出库</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/returngoods.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">退货</text>
        </u-grid-item>
      </u-grid>
    </view>
    <!-- 报表 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        报表
      </text>
      <u-grid class="bill_part" :border="false" col="4">
        <u-grid-item class="bill_grid">
          <image src="@/static/PaymentForm.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">付款表</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Trackingtable.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">跟踪表</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Summary.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">汇总表</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Partslist.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">明细表</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/ProfitStatement.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">利润表</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/Rankingtable.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">排行表</text>
        </u-grid-item>
      </u-grid>
    </view>
    <manage-popup
      :show="managePopupVisible"
      :close="closePopup"
      :filedValue="filedValue"
    ></manage-popup>
  </view>
</template>

<script>
import moneyCard from "@/components/money-card";
import titleNavigation from "@/components/title-navigation";
import managePopup from "@/components/manage-popup";
export default {
  components: {
    moneyCard,
    titleNavigation,
    managePopup,
  },
  data() {
    return {
      touchData: {
        touching: false,
        trace: [],
      },
      managePopupVisible: false,
      filedValue: {
        org_id: "",
        data_source: "",
        email_address: "",
        autoboot: 1,
        passageway: "",
        merchant_no: "",
        terminal_no: "",
        machine_no: "",
        job_no: "",
        barcode_prefix: "",
      },
    };
  },
  methods: {
    goTo(path) {
      uni.navigateTo({
        url: path,
      });
    },
    goTo2(path) {
      const config = uni.getStorageSync("quake_sales_inventory_config");
      if (
        config.passageway &&
        config.merchant_no &&
        config.terminal_no &&
        config.machine_no &&
        config.job_no &&
        config.barcode_prefix
      ) {
        uni.navigateTo({
          url: path,
        });
      } else {
        uni.showToast({
          title: "请填写配置",
          icon: "error",
        });
      }
    },
    onTouchStart(e) {
      console.log("onTouchStart");
      if (e.touches.length !== 1) {
        this.touchData = {
          touching: false,
          trace: [],
        };
        return;
      }
      this.touchData.touching = true;
      this.touchData.trace = [
        { x: e.touches[0].clientX, y: e.touches[0].clientY },
      ];
    },
    onTouchMove(e) {
      console.log("onTouchMove");
      if (!this.touchData.touching) {
        return;
      }
      this.touchData.trace = [
        ...this.touchData.trace,
        {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        },
      ];
    },
    onTouchEnd(e) {
      console.log("onTouchEnd");
      if (!this.touchData.touching) {
        return undefined;
      }
      const traceTem = this.touchData.trace;
      this.touchData.touching = false;
      this.touchData.trace = [];
      // 开始处理
      let startPosition = traceTem[0];
      let endPosition = traceTem[traceTem.length - 1];
      if (endPosition.x - startPosition.x > 150) {
        console.log("R");
        this.managePopupVisible = true;
        const storageSyncConfig = uni.getStorageSync(
          "quake_sales_inventory_config"
        );
        this.filedValue = {
          org_id: storageSyncConfig.org_id || "",
          data_source: storageSyncConfig.data_source || "",
          email_address: storageSyncConfig.email_address || "",
          autoboot: storageSyncConfig.autoboot,
          passageway: storageSyncConfig.passageway || "",
          merchant_no: storageSyncConfig.merchant_no || "",
          terminal_no: storageSyncConfig.terminal_no || "",
          machine_no: storageSyncConfig.machine_no || "",
          job_no: storageSyncConfig.job_no || "",
          barcode_prefix: storageSyncConfig.barcode_prefix || "",
        };
      }
      if (startPosition.x - endPosition.x > 150) {
        console.log("L");
        this.managePopupVisible = false;
      }
    },
    closePopup() {
      this.managePopupVisible = false;
    },
  },
};
</script>

<style>
.bill {
  padding: 28rpx 36rpx;
}
.bill_part {
  /* display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  row-gap: 32rpx; */
  margin-top: 24rpx;
}
.bill_part2 {
  /* display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-items: center;
  row-gap: 32rpx; */
  margin-top: 24rpx;
}
.bill_grid {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img_32 {
  width: 64rpx;
  height: 64rpx;
  object-fit: cover;
}
</style>
