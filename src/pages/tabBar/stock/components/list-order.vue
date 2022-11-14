<template>
  <view class="content">
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
        flex-grow: 1;
      "
    >
      <list-part
        v-for="item in listArr"
        :key="item.id"
        :order_id="item.id"
        :warehouse="item.warehouse"
        :prepared_by="item.prepared_by"
        :count_date="item.count_date"
        :status="0"
        style="margin-bottom: 24rpx"
      ></list-part>
      <list-part
        v-for="item in listArr2"
        :key="item.id"
        :order_id="item.id"
        :warehouse="item.warehouse"
        :prepared_by="item.prepared_by"
        :count_date="item.count_date"
        :status="1"
        style="margin-bottom: 24rpx"
      ></list-part>
    </view>
  </view>
</template>

<script>
import listPart from "./list-part.vue";
export default {
  data() {
    return {
      listArr: [],
      listArr2: [],
    };
  },
  components: { listPart },
  onLoad() {
    this.getListOrder();
  },
  methods: {
    getListOrder() {
      // sqLite
      // uni.request({
      //   url: "http://localhost:20001/levitas",
      //   method: "POST",
      //   data: {
      //     table: '"inventory_documents"',
      //     conditions: {
      //       fields: ["*"],
      //       order: {
      //         count_date: "desc",
      //       },
      //       query: {
      //         and: [
      //           {
      //             match: {
      //               status: 0,
      //             },
      //           },
      //           {
      //             match: {
      //               org_id: 123456789,
      //             },
      //           },
      //         ],
      //       },
      //     },
      //   },
      //   success: ({ data }) => {
      //     this.listArr = data.data;
      //   },
      // });
      // sqLite

      // localstorage
      this.listArr = uni
        .getStorageSync("inventory_documents")
        .filter((o) => {
          return (
            o.status === 0 &&
            o.org_id ===
              uni.getStorageSync("quake_sales_inventory_config").org_id
          );
        })
        .concat()
        .sort(this.sortBy("count_date"));
      uni.request({
        url: "https://1to2to3.cn/rds2/service/query",
        method: "POST",
        data: {
          auth: 2,
          project: "quake_sales_inventory",
          table: "inventory_documents",
          conditions: {
            fields: [],
            order: {
              count_date: "desc",
            },
            query: {
              and: [
                {
                  match: {
                    org_id: uni.getStorageSync("quake_sales_inventory_config")
                      .org_id,
                  },
                },
              ],
            },
          },
        },
        success: ({ data }) => {
          this.listArr2 = data.data;
        },
      });
      // localstorage
    },
    sortBy(key) {
      return (a, b) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0);
    },
  },
  onShow() {
    this.getListOrder();
  },
};
</script>

<style scoped>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
