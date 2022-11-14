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
      <u-grid class="bill_part" :border="false" col="4">
        <u-grid-item class="bill_grid" @click="goTo('/pages/tabBar/capital/components/add-receipt')">
          <image src="@/static/receipt.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">收款单</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" @click="goTo('/pages/tabBar/capital/components/add-payment')">
          <image src="@/static/PaymentDoc.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">付款单</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/WriteoffDoc.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">核销单</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Otherincome.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">其他收入</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/Otherexpenses.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">其他支出</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/TransferDoc.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">转账单</text>
        </u-grid-item>
      </u-grid>
    </view>
    <!-- 列表 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        列表
      </text>
      <u-grid class="bill_part" :border="false" col="4">
        <u-grid-item class="bill_grid">
          <image src="@/static/Collection.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">收款</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/payment.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">付款</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Writeoff.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">核销</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Otherincome(2).png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">其他收入</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/Otherexpenses(2).png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">其他支出</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/transferaccounts.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">转账</text>
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
          <image
            src="@/static/StatementofCurrentDebts.png"
            alt=""
            class="img_32"
          />
          <text style="font-size: 24rpx; font-weight: 400">往来欠款表</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/ContactUnitTable.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">往来单位表</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image
            src="@/static/Customerreconciliation.png"
            alt=""
            class="img_32"
          />
          <text style="font-size: 24rpx; font-weight: 400">客户对账</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image
            src="@/static/SupplierReconciliation.png"
            alt=""
            class="img_32"
          />
          <text style="font-size: 24rpx; font-weight: 400">供应商对账</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/RDetails.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">应收明细</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/PayableDetails.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">应付明细</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/Otherdetails.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">其他明细</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/Cashbank.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">现金银行</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/ProfitStatement.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">利润表</text>
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
