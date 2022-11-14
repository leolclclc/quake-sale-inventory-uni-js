<template>
  <view>
    <view
      style="
        display: flex;
        align-items: center;
        padding: 24rpx;
        box-shadow: inset 0rpx -1rpx 0rpx rgba(0, 0, 0, 0.08);
      "
    >
      <u-search
        placeholder="单据编号/供应商名称/制单人等关键字"
        :show-action="false"
      ></u-search>
      <text style="font-size: 24rpx; margin-left: 32rpx">筛选</text>
      <image
        src="@/static/screen.png"
        alt=""
        style="width: 32rpx; height: 32rpx"
      />
    </view>
    <view
      style="
        display: flex;
        align-items: center;
        padding: 16rpx 24rpx;
        gap: 16rpx;
      "
    >
      <text style="font-weight: 400; font-size: 28rpx; line-height: 40rpx">
        日期：
      </text>
      <u-input
        placeholder="请输入内容"
        border="surround"
        inputAlign="center"
        shape="circle"
        customStyle="max-width:259rpx;max-height:28rpx"
      ></u-input>
      <view style="width: 16rpx; height: 2rpx; background: #000"></view>
      <u-input
        placeholder="请输入内容"
        border="surround"
        inputAlign="center"
        shape="circle"
        customStyle="max-width:259rpx;max-height:28rpx"
      ></u-input>
      <image
        src="@/static/more2.png"
        style="width: 40rpx; height: 40rpx"
        alt=""
      />
    </view>
    <view
      style="
        background: #ebebeb;
        padding: 24rpx 0;
        display: flex;
        flex-direction: column;
        gap: 24rpx;
      "
    >
      <view style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            background: rgba(138, 97, 255, 0.5);
            border-radius: 8rpx;
            flex-grow: 0;
          "
        ></view>
        <view
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 34rpx;
            display: flex;
            flex-direction: column;
          "
        >
          <text>单据编号：CGDD20220517001</text>
          <text>供应商名称：某某供应商</text>
          <text>制单人：某某某</text>
        </view>
        <text
          style="
            color: #0da22e;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
            flex-grow: 1;
          "
        >
          全部入库
        </text>
      </view>
      <view style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            background: rgba(138, 97, 255, 0.5);
            border-radius: 8rpx;
            flex-grow: 0;
          "
        ></view>
        <view
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 34rpx;
            display: flex;
            flex-direction: column;
          "
        >
          <text>单据编号：CGDD20220517001</text>
          <text>供应商名称：某某供应商</text>
          <text>制单人：某某某</text>
        </view>
        <text
          style="
            color: #0da22e;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
            flex-grow: 1;
          "
        >
          全部入库
        </text>
      </view>
      <view style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            background: rgba(138, 97, 255, 0.5);
            border-radius: 8rpx;
            flex-grow: 0;
          "
        ></view>
        <view
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 34rpx;
            display: flex;
            flex-direction: column;
          "
        >
          <text>单据编号：CGDD20220517001</text>
          <text>供应商名称：某某供应商</text>
          <text>制单人：某某某</text>
        </view>
        <text
          style="
            color: #0da22e;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
            flex-grow: 1;
          "
        >
          全部入库
        </text>
      </view>
      <view style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            background: rgba(138, 97, 255, 0.5);
            border-radius: 8rpx;
            flex-grow: 0;
          "
        ></view>
        <view
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 34rpx;
            display: flex;
            flex-direction: column;
          "
        >
          <text>单据编号：CGDD20220517001</text>
          <text>供应商名称：某某供应商</text>
          <text>制单人：某某某</text>
        </view>
        <text
          style="
            color: #0da22e;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
            flex-grow: 1;
          "
        >
          全部入库
        </text>
      </view>
      <view style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            background: rgba(138, 97, 255, 0.5);
            border-radius: 8rpx;
            flex-grow: 0;
          "
        ></view>
        <view
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 34rpx;
            display: flex;
            flex-direction: column;
          "
        >
          <text>单据编号：CGDD20220517001</text>
          <text>供应商名称：某某供应商</text>
          <text>制单人：某某某</text>
        </view>
        <text
          style="
            color: #0da22e;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
            flex-grow: 1;
          "
        >
          全部入库
        </text>
      </view>
      <view style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            background: rgba(138, 97, 255, 0.5);
            border-radius: 8rpx;
            flex-grow: 0;
          "
        ></view>
        <view
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 34rpx;
            display: flex;
            flex-direction: column;
          "
        >
          <text>单据编号：CGDD20220517001</text>
          <text>供应商名称：某某供应商</text>
          <text>制单人：某某某</text>
        </view>
        <text
          style="
            color: #0da22e;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
            flex-grow: 1;
          "
        >
          全部入库
        </text>
      </view>
      <view style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            background: rgba(138, 97, 255, 0.5);
            border-radius: 8rpx;
            flex-grow: 0;
          "
        ></view>
        <view
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 34rpx;
            display: flex;
            flex-direction: column;
          "
        >
          <text>单据编号：CGDD20220517001</text>
          <text>供应商名称：某某供应商</text>
          <text>制单人：某某某</text>
        </view>
        <text
          style="
            color: #0da22e;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
            flex-grow: 1;
          "
        >
          全部入库
        </text>
      </view>
      <view style="background: #fff; display: flex; padding: 24rpx; gap: 16rpx">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            background: rgba(138, 97, 255, 0.5);
            border-radius: 8rpx;
            flex-grow: 0;
          "
        ></view>
        <view
          style="
            font-weight: 400;
            font-size: 24rpx;
            line-height: 34rpx;
            display: flex;
            flex-direction: column;
          "
        >
          <text>单据编号：CGDD20220517001</text>
          <text>供应商名称：某某供应商</text>
          <text>制单人：某某某</text>
        </view>
        <text
          style="
            color: #0da22e;
            font-weight: 400;
            font-size: 12px;
            line-height: 17px;
            text-align: right;
            flex-grow: 1;
          "
        >
          全部入库
        </text>
      </view>
    </view>
  </view>
</template>
<style scoped></style>
