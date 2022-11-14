<template>
  <view class="u-page">
    <view class="u-demo-block">
      <view class="u-demo-block__content">
        <!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
        <u--form labelPosition="left" :model="model1" ref="form1">
          <!-- 盘点日期 -->
          <u-form-item
            prop="countDate"
            labelWidth="80"
            borderBottom
            @click="
              showCalendar = true;
              hideKeyboard();
            "
            ref="item1"
          >
            <view class="top_text">
              <view class="top_text_blue"></view>
              <text class="top_text_text">盘点日期</text>
              <u-input
                v-model="model1.countDate"
                disabled
                disabledColor="#ffffff"
                placeholder="请选择盘点日期"
                border="none"
                inputAlign="right"
              ></u-input>
            </view>
            <u-icon
              slot="right"
              name="arrow-right"
              style="margin-left: 26rpx"
            ></u-icon>
          </u-form-item>
          <!-- 库存日期 -->
          <u-form-item
            prop="stockDate"
            labelWidth="80"
            borderBottom
            @click="
              showCalendar2 = true;
              hideKeyboard();
            "
            ref="item1"
          >
            <view class="top_text">
              <view class="top_text_blue"></view>
              <text class="top_text_text">库存日期</text>
              <u-input
                v-model="model1.stockDate"
                disabled
                disabledColor="#ffffff"
                placeholder="请选择库存日期"
                border="none"
                inputAlign="right"
              ></u-input>
            </view>
            <u-icon
              slot="right"
              name="arrow-right"
              style="margin-left: 26rpx"
            ></u-icon>
          </u-form-item>
          <!-- 仓库 -->
          <u-form-item
            prop=""
            borderBottom
            labelWidth="80"
            @click="
              showSheet = true;
              hideKeyboard();
            "
            ref="item1"
          >
            <view class="top_text">
              <view class="top_text_blue"></view>
              <text class="top_text_text">仓库</text>
              <u-input
                v-model="model1.warehouse"
                disabled
                disabledColor="#ffffff"
                placeholder="点击选择"
                border="none"
                inputAlign="right"
              ></u-input>
            </view>
            <u-icon
              slot="right"
              name="arrow-right"
              style="margin-left: 26rpx"
            ></u-icon>
          </u-form-item>
          <!-- 制单人 -->
          <u-form-item
            label="实销"
            prop="userInfo.name"
            borderBottom
            labelWidth="80"
            ref="item1"
          >
            <text
              style="
                text-align: right;
                width: 100%;
                font-weight: 600;
                font-size: 28rpx;
                line-height: 40rpx;
              "
            >
              默认本账号
            </text>
          </u-form-item>
          <!-- 商品名称 -->
          <u-form-item
            prop="userInfo.sex"
            borderBottom
            labelWidth="80"
            ref="item1"
          >
            <view
              class="top_text"
              style="display: flex; justify-content: space-between"
            >
              <view style="display: flex; align-items: center">
                <view class="top_text_blue"></view>
                <text class="top_text_text">商品名称</text>
              </view>
              <view style="display: flex; align-items: center">
                <view v-if="flag">
                  <u-input
                    type="number"
                    key="1"
                    v-model="saoma"
                    disabledColor="#ffffff"
                    placeholder="可直接输入名称或扫码"
                    border="none"
                    inputAlign="right"
                    :focus="goodsFocus"
                    @confirm="test"
                    ref="goodsRef"
                  ></u-input>
                </view>
                <view v-else>
                  <u-input
                    type="number"
                    key="2"
                    v-model="saoma"
                    disabledColor="#ffffff"
                    placeholder="可直接输入名称或扫码"
                    border="none"
                    inputAlign="right"
                    :focus="goodsFocus"
                    @confirm="test"
                    ref="goodsRef"
                  ></u-input>
                </view>
                <image
                  src="@/static/Scanningcode.png"
                  alt=""
                  style="width: 40rpx; height: 40rpx; margin-left: 26rpx"
                  @click="goToScan"
                />
              </view>
            </view>
          </u-form-item>
        </u--form>
        <u-action-sheet
          :show="showSheet"
          :actions="actions"
          title="请选择仓库"
          @close="showSheet = false"
          @select="sexSelect"
          style="height: 0"
        ></u-action-sheet>
        <u-calendar
          :show="showCalendar"
          mode="single"
          @confirm="calendarConfirm"
          @close="calendarClose"
          style="height: 0"
        ></u-calendar>
        <u-calendar
          :show="showCalendar2"
          mode="single"
          @confirm="calendarConfirm2"
          @close="calendarClose2"
          style="height: 0"
        ></u-calendar>
      </view>
      <view class="goods">
        <goods-part
          v-for="(item, index) in goodsArrs"
          :key="item.sku_code"
          :sku_name="item.sku_name"
          :sku_price="item.sku_price"
          :sku_code="item.sku_code"
          :goods_no="item.goods_no"
          :sku_standards="item.sku_standards"
          :number="item.number"
          :changeNumber="changeNumber"
          :index="index"
        ></goods-part>
      </view>

      <view class="footer">
        <view
          style="
            margin: 24rpx 60rpx;
            height: 60rpx;
            background: #8a61ff;
            border-radius: 8rpx;
            display: flex;
            justify-content: center;
            align-items: center;
          "
          @click="save"
        >
          <span style="color: white">保存</span>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import goodsPart from "./goods-part";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
export default {
  components: {
    goodsPart,
  },
  data() {
    return {
      flag: true,
      goodsFocus: true,
      goodsArrs: [],
      goodsStorage: [],
      fileList1: [],
      saoma: "",
      showCalendar: false,
      showCalendar2: false,
      showSheet: false,
      model1: {
        countDate: moment().format("YYYY-MM-DD"),
        warehouse: "主库",
      },
      birthday: Number(new Date()),
      actions: [
        {
          name: "主库",
        },
      ],
      rules: {
        countDate: {
          type: "string",
          required: true,
          message: "请选择盘点日期",
          trigger: ["change"],
        },
        // stockDate: {
        //   type: 'string',
        //   required: true,
        //   message: '请选择库存日期',
        //   trigger: ['change'],
        // },
        warehouse: {
          type: "string",
          required: true,
          message: "请选择仓库",
          trigger: ["change"],
        },
      },
    };
  },
  onReady() {
    // 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
    this.$refs.form1.setRules(this.rules);
  },
  methods: {
    test(value) {
      // sqLite
      // uni.request({
      //   url: "http://localhost:20001/levitas",
      //   method: "POST",
      //   data: {
      //     table: '"goods"',
      //     conditions: {
      //       pagination: {
      //         page: 1,
      //         pageSize: 1,
      //       },
      //       fields: ["*"],
      //       query: {
      //         and: [
      //           {
      //             match: {
      //               sku_barcode: value,
      //             },
      //           },
      //         ],
      //       },
      //     },
      //   },
      //   success: ({ data }) => {
      //     console.log("data", data.data);
      //     if (data.data.length === 0) {
      //       uni.showToast({
      //         title: "未查找到该商品",
      //         icon: "error",
      //       });
      //     } else {
      //       const goodsRecord = data.data[0];
      //       const that = this;
      //       that.flag = !that.flag;
      //       that.saoma = "";
      //       that.goodsArrs.unshift({
      //         ...goodsRecord,
      //         sku_price: Number(goodsRecord.sku_price).toFixed(2),
      //         goods_no: this.goodsArrs.length + 1,
      //       });
      //       uni.showToast({ title: "扫描成功" });
      //       that.goodsFocus = false;
      //       setTimeout(() => {
      //         that.$nextTick(() => {
      //           that.goodsFocus = true;
      //         });
      //       }, 200);
      //     }
      //   },
      // });
      // sqLite
      // localstorage
      const res = this.search(Number(value));
      if (res !== undefined) {
        const goodsRecord = res;
        this.saoma = "";
        this.flag = !this.flag;
        this.goodsArrs.unshift({
          ...goodsRecord,
          sku_price: Number(goodsRecord.sku_price).toFixed(2),
          goods_no: this.goodsArrs.length + 1,
        });
        // uni.showToast({ title: "扫描成功" });
        // that.goodsFocus = false;
        // setTimeout(() => {
        //   that.$nextTick(() => {
        //     that.goodsFocus = true;
        //   });
        // }, 200);
      } else {
        const that = this;
        uni.showModal({
          title: "未查找到该商品",
          content: "请重新扫描",
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              that.saoma = "";
              that.flag = !that.flag;
            }
          },
        });
      }
      // localstorage
    },
    search(search_value) {
      let left = 0;
      let right = this.goodsStorage.length - 1; // 定义了search_value在左闭右闭的区间内，[left, right]
      while (left < right) {
        //当left == right时，区间[left, right]仍然有效
        let middle = Math.trunc(left + (right - left) / 2); //等同于 (left + right) / 2，防止溢出
        // console.log("middle", middle);
        if (Number(this.goodsStorage[middle].sku_barcode) > search_value) {
          right = middle; //target在左区间，所以[left, middle - 1]
        } else if (
          Number(this.goodsStorage[middle].sku_barcode) < search_value
        ) {
          left = middle + 1; //target在右区间，所以[middle + 1, right]
        } else {
          //既不在左边，也不在右边，那就是找到答案了
          return this.goodsStorage[middle];
        }
      }
      //没有找到目标值
      return undefined;
    },
    save() {
      // sqLite
      // this.$refs.form1.validate().then(() => {
      //   uni.showLoading({ mask: true });
      //   const order = uuidv4();
      //   const setData = this.goodsArrs.map((item) => {
      //     return {
      //       inventory_id: order,
      //       sku_name: item.sku_name,
      //       sku_barcode: item.sku_barcode,
      //       sku_code: item.sku_code,
      //       sku_standards: item.sku_standards,
      //       sku_price: item.sku_price,
      //       number: 1,
      //       goods_no: item.goods_no,
      //     };
      //   });
      //   if (setData.length === 0) {
      //     uni.showToast({
      //       title: "请扫描商品",
      //       icon: "error",
      //     });
      //   } else {
      //     Promise.all([
      //       uni.request({
      //         url: "http://localhost:20001/levitas",
      //         method: "POST",
      //         data: {
      //           table: '"inventory_documents"',
      //           data: [
      //             {
      //               id: order,
      //               warehouse: "主库",
      //               prepared_by: "蔡建雄",
      //               count_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      //               status: 0,
      //               org_id:123456789
      //             },
      //           ],
      //         },
      //       }),
      //       uni.request({
      //         url: "http://localhost:20001/levitas",
      //         method: "POST",
      //         data: {
      //           table: '"inventory_goods"',
      //           data: setData,
      //         },
      //       }),
      //     ]).then(() => {
      //       uni.hideLoading();
      //       uni.showToast({
      //         title: "保存成功",
      //       });
      //       setTimeout(() => {
      //         uni.navigateBack({
      //           delta: 1,
      //         });
      //       }, 500);
      //     });
      //   }
      // });
      // sqLite

      // localstorage
      this.$refs.form1.validate().then(() => {
        uni.showLoading({ mask: true });
        const order = uuidv4();
        const setData = this.goodsArrs.map((item) => {
          return {
            inventory_id: order,
            sku_name: item.sku_name,
            sku_barcode: item.sku_barcode,
            sku_code: item.sku_code,
            sku_standards: item.sku_standards,
            sku_price: item.sku_price,
            number: item.number,
            goods_no: item.goods_no,
          };
        });
        if (setData.length === 0) {
          uni.showToast({
            title: "请扫描商品",
            icon: "error",
          });
        } else {
          const inventory_documentsTem = uni.getStorageSync(
            "inventory_documents"
          );
          const inventory_documentsData = (inventory_documentsTem || []).concat(
            [
              {
                id: order,
                warehouse: "主库",
                prepared_by: uni.getStorageSync("quake_sales_inventory_config")
                  .username,
                count_date: moment().format("YYYY-MM-DD HH:mm:ss"),
                status: 0,
                org_id: uni.getStorageSync("quake_sales_inventory_config")
                  .org_id,
              },
            ]
          );
          uni.setStorageSync("inventory_documents", inventory_documentsData);
          const inventory_goodsTem = uni.getStorageSync("inventory_goods");
          const inventory_goodsData = (inventory_goodsTem || []).concat(
            setData
          );
          uni.setStorageSync("inventory_goods", inventory_goodsData);
          uni.hideLoading();
          uni.showToast({
            title: "保存成功",
          });
          this.goodsArrs = [];
          setTimeout(() => {
            uni.navigateBack({
              delta: 1,
            });
          }, 500);
        }
      });
      // localstorage
    },
    changeNumber(index, value) {
      this.goodsArrs[index].number = value;
    },
    goToScan() {
      const that = this;
      uni.scanCode({
        scanType: ["barCode"],
        success: function (res2) {
          const res = that.search(Number(res2.result));
          if (res !== undefined) {
            const goodsRecord = res;
            that.goodsArrs.unshift({
              ...goodsRecord,
              sku_price: Number(goodsRecord.sku_price).toFixed(2),
              goods_no: that.goodsArrs.length + 1,
              number: 1,
            });
            that.goToScan();
          } else {
            uni.showModal({
              title: "未查找到该商品",
              content: "请重新扫描",
              showCancel: false,
              success: function (res) {},
            });
          }
        },
      });
    },
    calendarConfirm(e) {
      this.showCalendar = false;
      this.model1.countDate = `${e[0]}`;
      this.$refs.form1.validateField("countDate");
    },
    calendarClose() {
      this.showCalendar = false;
      this.$refs.form1.validateField("countDate");
    },
    calendarConfirm2(e) {
      this.showCalendar2 = false;
      this.model1.stockDate = `${e[0]}`;
    },
    calendarClose2() {
      this.showCalendar2 = false;
    },
  },
  onLoad() {
    this.goodsStorage = uni.getStorageSync("goods");
  },
  onBackPress() {
    if (this.goodsArrs.length !== 0) {
      uni.showModal({
        title: "警告",
        content: "您的数据未保存，是否退出",
        success: function (res) {
          if (res.confirm) {
            // 退出当前应用，改方法只在App中生效
            // plus.runtime.quit();
            uni.switchTab({
              url: "/pages/tabBar/stock/index",
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
      return true;
    }
  },
};
</script>

<style lang="scss">
.top_text {
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.top_text_blue {
  width: 16rpx;
  height: 16rpx;
  background: #8a61ff;
  border-radius: 19998rpx;
  margin-right: 10rpx;
}
.top_text_text {
  font-weight: 400;
  font-size: 28rpx;
  line-height: 40rpx;
}
.split {
  width: 100%;
  height: 16rpx;
  background: #ebebeb;
}
.u-demo-block {
  height: 100vh;
  // height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
}
.u-demo-block__content {
  padding: 0 40rpx;
}
.footer {
  height: 120rpx;
  flex-shrink: 0;
  box-shadow: 0rpx 0rpx 2rpx 2rpx #ebebeb;
}
.goods {
  flex-grow: 1;
  height: 0;
  display: flex;
  flex-direction: column;
  // gap: 16rpx;
  overflow: scroll;
  background: #ebebeb;
}
</style>
