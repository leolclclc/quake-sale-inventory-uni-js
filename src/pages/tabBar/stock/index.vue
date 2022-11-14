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
        <u-grid-item class="bill_grid">
          <image src="@/static/StockTransfer.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">调拨单</text>
        </u-grid-item>
        <u-grid-item
          class="bill_grid"
          @click="goTo('/pages/tabBar/stock/components/add-inventory')"
        >
          <image src="@/static/CountSheet.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">盘点单</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image
            src="@/static/Miscellaneouswarehousing.png"
            alt=""
            class="img_32"
          />
          <text style="font-size: 24rpx; font-weight: 400">其他入库</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Miscellaneousissue.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">其他出库</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/Costadjustment.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">成本调整</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/Assemblylist.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">组装单</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px" @click="test">
          <image src="@/static/Disassemblylist.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">拆卸单</text>
        </u-grid-item>
        <!-- <u-grid-item
          class="bill_grid"
          style="margin-top: 16px"
          @click="downloadOffline"
        >
          <image src="@/static/download.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">下载离线数据</text>
        </u-grid-item> -->
      </u-grid>
    </view>
    <!-- 列表 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        列表
      </text>
      <u-grid class="bill_part" :border="false" col="4">
        <u-grid-item class="bill_grid">
          <image src="@/static/allocation.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">调拨</text>
        </u-grid-item>
        <u-grid-item
          class="bill_grid"
          @click="goTo('/pages/tabBar/stock/components/list-order')"
        >
          <image src="@/static/Inventory.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">盘点</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image
            src="@/static/Miscellaneouswarehousing2.png"
            alt=""
            class="img_32"
          />
          <text style="font-size: 24rpx; font-weight: 400">其他入库</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Miscellaneousissue2.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">其他出库</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/Costadjustment2.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">成本调整</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/assemble.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">组装</text>
        </u-grid-item>
        <u-grid-item class="bill_grid" style="margin-top: 16px">
          <image src="@/static/disassemble.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">拆卸</text>
        </u-grid-item>
      </u-grid>
    </view>
    <!-- 报表 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        报表
      </text>
      <u-grid class="bill_part" :border="false">
        <u-grid-item class="bill_grid">
          <image src="@/static/Balancetable.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">余额表</text>
        </u-grid-item>
        <u-grid-item class="bill_grid">
          <image src="@/static/Partslist.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">明细表</text>
        </u-grid-item>
        <u-grid-item
          class="bill_grid"
          @click="goTo('/pages/webview-test/index')"
        >
          <image src="@/static/Summary.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">汇总表</text>
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
import managePopup from "@/components/manage-popup";
import titleNavigation from "@/components/title-navigation";
export default {
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
  components: {
    moneyCard,
    titleNavigation,
    managePopup,
  },
  methods: {
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
    goTo(path) {
      uni.navigateTo({
        url: path,
      });
    },
    test() {
      uni.request({
        url: "http://localhost:20001",
        success: (res) => {
          uni.showToast({
            title: res.data,
          });
        },
      });
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
