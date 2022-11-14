<template>
  <view class="content">
    <view class="detail">
      <view class="detail-1">
        <span style="font-weight: 400; font-size: 28rpx; line-height: 40rpx">
          单据信息
        </span>
        <view
          v-if="status === '0'"
          style="
            background: #8a61ff;
            color: white;
            padding: 6px 12px 6px 12px;
            border-radius: 8px;
          "
          @click="uploadEmail"
        >
          上传
        </view>
      </view>
      <view class="detail-2">
        <span>单据编号</span>
        <span>{{ orderRecord.id }}</span>
      </view>
      <view class="detail-2">
        <span>仓库名称</span>
        <span>{{ orderRecord.warehouse }}</span>
      </view>
      <view class="detail-2">
        <span>制单人</span>
        <span>{{ orderRecord.prepared_by }}</span>
      </view>
      <view class="detail-2">
        <span>盘点日期</span>
        <span>{{ orderRecordFormat }}</span>
      </view>
      <view class="detail-2">
        <span>库存日期</span>
        <span>{{ orderRecord.inventory_date }}</span>
      </view>
    </view>
    <view v-for="item in goodsArr" :key="item.sku_code" class="production">
      <view class="production1">
        <view
          style="
            width: 120rpx;
            height: 120rpx;
            border-radius: 8rpx;
            background: rgba(138, 97, 255, 0.5);
            margin-right: 16rpx;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 48rpx;
            font-weight: 700;
          "
        >
          {{ item.goods_no }}
        </view>
        <view
          style="display: flex; flex-direction: column; flex-grow: 1; width: 0"
        >
          <text
            style="
              font-weight: 400;
              font-size: 32rpx;
              line-height: 44rpx;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            "
          >
            {{ item.sku_name }}
          </text>
          <span
            style="
              font-weight: 400;
              font-size: 24rpx;
              line-height: 44rpx;
              color: #b3b3b3;
            "
          >
            预设规格：{{ item.sku_standards }}
          </span>
          <span
            style="
              font-weight: 400;
              font-size: 24rpx;
              line-height: 44rpx;
              color: #b3b3b3;
            "
          >
            商品编码：{{ item.sku_code }}
          </span>
        </view>
        <view
          style="
            font-weight: 400;
            font-size: 32rpx;
            line-height: 44rpx;
            flex-shrink: 0;
          "
        >
          ￥{{ item.sku_price }}
        </view>
      </view>
      <view class="production2">
        <span>盘点数量</span>
        <span>{{ item.number }} 件</span>
      </view>
    </view>
  </view>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      orderRecord: {},
      goodsArr: [],
      status: 1,
    };
  },
  computed: {
    orderRecordFormat() {
      return moment(this.orderRecord.count_date).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  onLoad(option) {
    // sqLite
    // this.status = option.status;
    // uni.request({
    //   url: "http://localhost:20001/levitas",
    //   method: "POST",
    //   data: {
    //     table: '"inventory_documents"',
    //     conditions: {
    //       fields: ["*"],
    //       query: {
    //         and: [
    //           {
    //             match: {
    //               id: option.id,
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   },
    //   success: ({ data }) => {
    //     this.orderRecord = data.data[0];
    //     console.log("this.orderRecord", this.orderRecord);
    //   },
    // });
    // uni.request({
    //   url: "http://localhost:20001/levitas",
    //   method: "POST",
    //   data: {
    //     table: '"inventory_goods"',
    //     conditions: {
    //       fields: ["*"],
    //       order: {
    //         goods_no: "desc",
    //       },
    //       query: {
    //         and: [
    //           {
    //             match: {
    //               inventory_id: option.id,
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   },
    //   success: ({ data }) => {
    //     this.goodsArr = data.data;
    //     console.log("this.goodsArr", this.goodsArr);
    //   },
    // });
    // sqLite
    // localstorage
    this.status = option.status;
    if (option.status === "0") {
      this.orderRecord = uni
        .getStorageSync("inventory_documents")
        .find(function (o) {
          return o.id === option.id;
        });
      this.goodsArr = uni
        .getStorageSync("inventory_goods")
        .filter((o) => {
          return o.inventory_id === option.id;
        })
        .concat()
        .sort(this.sortBy("goods_no"));
    } else {
      uni.request({
        url: "https://1to2to3.cn/rds2/service/query",
        method: "POST",
        data: {
          auth: 2,
          project: "quake_sales_inventory",
          table: "inventory_documents",
          conditions: {
            fields: [],
            query: {
              and: [{ match: { id: option.id } }],
            },
          },
        },
        success: ({ data }) => {
          this.orderRecord = data.data[0];
        },
      });
      uni.request({
        url: "https://1to2to3.cn/rds2/service/query",
        method: "POST",
        data: {
          auth: 2,
          project: "quake_sales_inventory",
          table: "inventory_goods",
          conditions: {
            fields: [],
            order: {
              goods_no: "desc",
            },
            query: {
              and: [{ match: { inventory_id: option.id } }],
            },
          },
        },
        success: ({ data }) => {
          this.goodsArr = data.data;
        },
      });
    }

    // localstorage
  },
  methods: {
    sortBy(key) {
      return (a, b) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0);
    },
    async uploadEmail() {
      uni.showLoading({
        title: "正在上传",
        mask: true,
      });
      let content = "";
      for (const item of this.goodsArr) {
        content += `\r\n${item.sku_code} ${item.number}`;
      }
      await new Promise((resolve, reject) => {
        uni.request({
          url: "https://1to2to3.cn/rds2/service/query",
          method: "POST",
          data: {
            auth: 2,
            project: "quake_sales_inventory",
            table: "config",
            conditions: {
              fields: [],
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
            if (data.count !== 0) {
              uni.setStorageSync("quake_sales_inventory_config", {
                ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
                data_source: data.data[0].data_source,
                email_address: data.data[0].email_address,
                autoboot: data.data[0].autoboot ? true : false,
              });
            } else {
              uni.setStorageSync("quake_sales_inventory_config", {
                ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
                data_source: "",
                email_address: "",
                autoboot: false,
              });
            }
            resolve();
          },
        });
      });
      try {
        await new Promise((resolve, reject) => {
          uni.request({
            url: "https://1to2to3.cn/quakemail/api/mail/sendMail",
            method: "POST",
            data: {
              fromMailAddress: "123@quakemail.cn",
              fromPassWord: "123456",
              toMailAddress: uni.getStorageSync("quake_sales_inventory_config")
                .email_address,
              subject: `${this.orderRecord.prepared_by}于${moment(
                this.orderRecord.count_date
              ).format("YYYY年MM月DD日HH:mm:ss")}上传的盘点单`,
              content: content,
              accessoryList: [],
              channelType: 2,
            },
            success: ({ data }) => {
              if (data.rspCode === 0) {
                resolve();
              } else {
                reject();
              }
            },
          });
        });
      } catch (error) {
        uni.showToast({ title: "上传失败", icon: "error" });
        return;
      }
      // sqLite
      // try {
      //   await Promise.all([
      //     new Promise((resolve, reject) => {
      //       uni.request({
      //         url: "http://localhost:20001/levitas",
      //         method: "POST",
      //         data: {
      //           table: '"inventory_documents"',
      //           query: {
      //             and: [
      //               {
      //                 match: {
      //                   id: this.orderRecord.id,
      //                 },
      //               },
      //             ],
      //           },
      //           data: {
      //             status: 1,
      //           },
      //         },
      //         success: () => {
      //           resolve();
      //         },
      //       });
      //     }),
      //     new Promise((resolve, reject) => {
      //       uni.request({
      //         url: "https://1to2to3.cn/rds2/service/create",
      //         method: "POST",
      //         data: {
      //           auth: 2,
      //           project: "quake_sales_inventory",
      //           table: "inventory_documents",
      //           data: [
      //             {
      //               id: this.orderRecord.id,
      //               prepared_by: this.orderRecord.prepared_by,
      //               count_date: this.orderRecord.count_date,
      //               warehouse: this.orderRecord.warehouse,
      // org_id:123456789
      //             },
      //           ],
      //         },
      //         success: () => {
      //           resolve();
      //         },
      //         fail: () => {
      //           reject();
      //         },
      //       });
      //     }),
      //     new Promise((resolve, reject) => {
      //       uni.request({
      //         url: "https://1to2to3.cn/rds2/service/create",
      //         method: "POST",
      //         data: {
      //           auth: 2,
      //           project: "quake_sales_inventory",
      //           table: "inventory_goods",
      //           data: this.goodsArr,
      //         },
      //         success: () => {
      //           resolve();
      //         },
      //         fail: () => {
      //           reject();
      //         },
      //       });
      //     }),
      //   ]);
      //   this.status = 1;
      //   uni.showToast({
      //     title: "上传成功",
      //   });
      // } catch (error) {
      //   uni.showToast({
      //     title: "上传失败",
      //     icon: "error",
      //   });
      // }
      // sqLite;
      // localstorage
      const tem = uni.getStorageSync("inventory_documents").map((item) => {
        if (item.id === this.orderRecord.id) {
          return {
            ...item,
            status: 1,
          };
        } else {
          return item;
        }
      });
      uni.setStorageSync("inventory_documents", tem);
      try {
        await Promise.all([
          new Promise((resolve, reject) => {
            uni.request({
              url: "https://1to2to3.cn/rds2/service/create",
              method: "POST",
              data: {
                auth: 2,
                project: "quake_sales_inventory",
                table: "inventory_documents",
                data: [
                  {
                    id: this.orderRecord.id,
                    prepared_by: this.orderRecord.prepared_by,
                    count_date: this.orderRecord.count_date,
                    warehouse: this.orderRecord.warehouse,
                    org_id: this.orderRecord.org_id,
                  },
                ],
              },
              success: () => {
                resolve();
              },
              fail: () => {
                reject();
              },
            });
          }),
          new Promise((resolve, reject) => {
            uni.request({
              url: "https://1to2to3.cn/rds2/service/create",
              method: "POST",
              data: {
                auth: 2,
                project: "quake_sales_inventory",
                table: "inventory_goods",
                data: this.goodsArr,
              },
              success: () => {
                resolve();
              },
              fail: () => {
                reject();
              },
            });
          }),
        ]);
        this.status = 1;
        uni.showToast({
          title: "上传成功",
        });
      } catch (error) {
        uni.showToast({
          title: "上传失败",
          icon: "error",
        });
      }
      // localstorage
    },
  },
};
</script>

<style scoped>
.content {
  background: #e5e5e5;
  height: 100vh;
  padding: 24rpx 0 0 0;
}
.detail {
  background: #ffffff;
  padding: 0 40rpx 0 40rpx;
}
.detail-1 {
  height: 90rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.detail-2 {
  height: 72rpx;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 24rpx;
  line-height: 34rpx;
  justify-content: space-between;
}
.production {
  margin-top: 24rpx;
  background: #fff;
  padding: 24rpx 40rpx 24rpx 40rpx;
  margin-bottom: 16rpx;
}
.production1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.production2 {
  height: 90rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
