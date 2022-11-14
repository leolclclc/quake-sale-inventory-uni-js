<template>
  <view class="contain">
    <view class="money_card">
      <!-- <view class="money_card_part1">
        <view style="display: flex; flex-direction: column">
          <text class="text1">今日销售金额</text>
          <text class="text2">￥6829.00</text>
          <text class="text3">共计X笔，比昨日+1029.33</text>
        </view>
        <view style="display: flex; flex-direction: column">
          <text class="text1">今日净销售额</text>
          <text class="text2">￥6829.00</text>
          <text class="text3">比昨日+1029.33</text>
        </view>
      </view> -->
      <u-grid :border="false" col="2">
        <u-grid-item>
          <view style="display: flex; flex-direction: column">
            <text class="text1">今日销售金额</text>
            <text class="text2">￥6829.00</text>
            <text class="text3">共计X笔，比昨日+1029.33</text>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view
            style="display: flex; flex-direction: column; padding-left: 92rpx"
          >
            <text class="text1">今日净销售额</text>
            <text class="text2">￥6829.00</text>
            <text class="text3">比昨日+1029.33</text>
          </view>
        </u-grid-item>
      </u-grid>
      <view class="money_card_part2"></view>
      <u-grid :border="false" col="3" align="center">
        <u-grid-item>
          <view class="money_card_part3_1">
            <text>本月利润(元)</text>
            <text>10074.33</text>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view class="money_card_part3_1">
            <text>本月销售额(元)</text>
            <text>10074.33</text>
          </view>
        </u-grid-item>
        <u-grid-item>
          <view class="money_card_part3_1">
            <text>库存数量</text>
            <text>10074.33</text>
          </view>
        </u-grid-item>
      </u-grid>
    </view>
    <view class="split"></view>
  </view>
</template>

<style scoped>
.money_card {
  margin: 32rpx;
  background: linear-gradient(180deg, #6266c4 0%, #5a34c7 100%);
  border-radius: 20rpx;
  padding: 32rpx 24rpx;
}
.money_card_part1 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 92rpx;
}
.text1 {
  color: white;
  font-weight: 400;
  font-size: 28rpx;
}
.text2 {
  color: #5ad7ff;
  font-weight: 500;
  font-size: 44rpx;
  margin-top: 20rpx;
}
.text3 {
  color: white;
  font-weight: 400;
  font-size: 24rpx;
  white-space: nowrap;
}
.money_card_part2 {
  height: 2rpx;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 32rpx 0;
  background: rgba(255, 255, 255, 0.3);
}
.money_card_part3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-items: center;
}
.money_card_part3_1 {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  font-size: 26rpx;
  line-height: 48rpx;
  color: white;
}
.split {
  background: #ebebeb;
  height: 24rpx;
}
</style>
