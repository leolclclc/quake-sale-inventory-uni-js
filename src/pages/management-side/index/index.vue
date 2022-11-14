<template>
  <view>
    <!-- 商品管理 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        商品管理
      </text>
      <view class="bill_part">
        <view
          class="bill_grid"
          @click="goTo('/pages/management-side/information/index')"
        >
          <image src="@/static/information.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">信息</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/Casepackaging.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">箱包装</text>
        </view>
      </view>
    </view>
    <!-- 属性管理 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        属性管理
      </text>
      <view class="bill_part">
        <view class="bill_grid">
          <image src="@/static/classification.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">分类</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/Specifications.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">规格</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/Company.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">单位</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/FormColumns.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">表单列</text>
        </view>
      </view>
    </view>
    <!-- 账户管理 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        账户管理
      </text>
      <view class="bill_part">
        <view class="bill_grid">
          <image src="@/static/ShipToAddress.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">收货地址</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/Collectionaccount.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">付/收款账户</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/invoice.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">发票</text>
        </view>
      </view>
    </view>
    <!-- 其他管理 -->
    <view class="bill">
      <text style="font-size: 32rpx; font-weight: 400; line-height: 22px">
        其他管理
      </text>
      <view class="bill_part">
        <view class="bill_grid">
          <image src="@/static/customer.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">客户</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/supplier.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">供应商</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/Warehouse.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">仓库</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/enclosure.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">附件</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/customerservice.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">客服</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/logistics.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">物流</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/staff.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">员工</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/Workorder.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">工单</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/Print.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">打印</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/off-line.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">离线</text>
        </view>
        <view class="bill_grid">
          <image src="@/static/recyclebin.png" alt="" class="img_32" />
          <text style="font-size: 24rpx; font-weight: 400">回收站</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import moneyCard from '@/components/money-card';
export default {
  components: {
    moneyCard,
  },
  methods: {
    goTo(path) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style>
.bill {
  padding: 28rpx 36rpx;
}
.bill_part {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  row-gap: 32rpx;
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
