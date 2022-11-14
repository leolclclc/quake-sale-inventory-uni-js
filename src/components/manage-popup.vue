<template>
  <u-popup
    :show="show"
    mode="left"
    :mask="true"
    closeOnClickOverlay
    @close="close"
    bgColor="#9671FF"
  >
    <view class="content">
      <view class="status_bar"></view>
      <view v-if="flag" class="manage-index">
        <view class="manage-index-1">
          <image
            src="@/static/xlogo.png"
            style="width: 120rpx; height: 120rpx; flex-shrink: 0"
          />
          <view
            style="
              margin-left: 16rpx;
              margin-right: 16rpx;
              color: white;
              display: flex;
              flex-direction: column;
            "
          >
            <span style="font-size: 28rpx; margin-bottom: 8rpx">小进销存</span>
            <span style="font-size: 24rpx">
              小进销存服务描述文本小进销存服务描述文本
            </span>
          </view>
          <view style="display: flex; flex-shrink: 0">
            <image
              src="@/static/help.png"
              style="width: 36rpx; height: 36rpx; margin-right: 4rpx"
            />
            <span style="color: white; font-size: 24rpx">使用小助手</span>
          </view>
        </view>
        <view class="manage-index-2">
          <view
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 48rpx;
            "
          >
            <span style="font-size: 28rpx; color: white">分账管理</span>
            <image
              src="@/static/goto.png"
              style="width: 40rpx; height: 40rpx"
            />
          </view>
          <view
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 48rpx;
            "
          >
            <span style="font-size: 28rpx; color: white">成员管理</span>
            <image
              src="@/static/goto.png"
              style="width: 40rpx; height: 40rpx"
            />
          </view>
          <view
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 48rpx;
            "
          >
            <span style="font-size: 28rpx; color: white">日志管理</span>
            <image
              src="@/static/goto.png"
              style="width: 40rpx; height: 40rpx"
            />
          </view>
          <view
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
            @click="goTo"
          >
            <span style="font-size: 28rpx; color: white">基础配置</span>
            <image
              src="@/static/goto.png"
              style="width: 40rpx; height: 40rpx"
            />
          </view>
        </view>
        <view class="divide"></view>
        <view class="manage-index-3">
          <view class="m">
            <image src="@/static/m1.png" class="m_img" />
            <span>数据认证</span>
          </view>
          <view class="m">
            <image src="@/static/m2.png" class="m_img" />
            <span>硬件连接</span>
          </view>
          <view class="m">
            <image src="@/static/m3.png" class="m_img" />
            <span>购买方案</span>
          </view>
          <view class="m">
            <image src="@/static/m4.png" class="m_img" />
            <span>封面管理</span>
          </view>
          <view class="m">
            <image src="@/static/m5.png" class="m_img" />
            <span>机器人管理</span>
          </view>
          <view class="m">
            <image src="@/static/m6.png" class="m_img" />
            <span>客服在线</span>
          </view>
          <view class="m">
            <image src="@/static/m7.png" class="m_img" />
            <span>推荐有你</span>
          </view>
          <view class="m">
            <image src="@/static/m8.png" class="m_img" />
            <span>专业助手</span>
          </view>
          <view class="m">
            <image src="@/static/m9.png" class="m_img" />
            <span>应用资质</span>
          </view>
          <view class="m">
            <image src="@/static/m10.png" class="m_img" />
            <span>行业圈子</span>
          </view>
          <view class="m" @click="downloadOffline">
            <image src="@/static/download.png" class="m_img" />
            <span>离线下载</span>
          </view>
        </view>
        <view class="divide"></view>
        <view class="manage-index-4">
          <span
            style="
              font-weight: 700;
              font-size: 28rpx;
              line-height: 40rpx;
              color: #ffffff;
            "
          >
            操作教程
          </span>
          <view style="display: flex; overflow-x: scroll"></view>
        </view>
      </view>
      <view v-if="!flag" class="manage-index">
        <view class="manage-index-5">
          <view @click="goBack" style="display: flex; align-items: center">
            <image
              src="@/static/left.png"
              style="width: 48rpx; height: 48rpx; margin-right: 8rpx"
            />
            <span
              style="
                font-weight: 700;
                font-size: 32rpx;
                line-height: 32rpx;
                color: white;
              "
            >
              基础配置
            </span>
          </view>
          <view style="margin-top: 34rpx">
            <u-subsection
              :list="list"
              :current="curNow"
              @change="sectionChange"
            ></u-subsection>
          </view>
          <view v-if="curNow === 0">
            <view style="margin-top: 34rpx; margin-bottom: 34rpx">
              <view style="display: flex; flex-direction: column">
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  机构id
                </span>
                <u-input
                  placeholder="请输入数据源"
                  border="surround"
                  v-model="filedValue.org_id"
                  style="background: #eae3ff"
                  readonly
                ></u-input>
              </view>
              <view
                style="display: flex; flex-direction: column; margin-top: 40rpx"
              >
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  数据源
                </span>
                <u-input
                  placeholder="请输入数据源"
                  border="surround"
                  v-model="filedValue.data_source"
                  style="background: #eae3ff"
                ></u-input>
              </view>
              <view
                style="display: flex; flex-direction: column; margin-top: 40rpx"
              >
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  上传邮箱地址
                </span>
                <u-input
                  placeholder="请输入上传邮箱地址"
                  border="surround"
                  v-model="filedValue.email_address"
                  style="background: #eae3ff"
                ></u-input>
              </view>
            </view>
            <view>
              <span
                style="
                  font-weight: 700;
                  font-size: 32rpx;
                  line-height: 44rpx;
                  color: #ffffff;
                "
              >
                加载配置
              </span>
              <view
                style="
                  margin-top: 88rpx;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: #ffffff;
                  "
                >
                  是否自启
                </span>
                <u-switch v-model="filedValue.autoboot"></u-switch>
              </view>
            </view>
            <view class="button" @click="configSubmit">保存</view>
          </view>
          <view v-if="curNow === 1">
            <view style="margin-top: 34rpx; margin-bottom: 34rpx">
              <view style="display: flex; flex-direction: column">
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  支付通道
                </span>
                <view
                  style="
                    height: 38px;
                    background: #eae3ff;
                    border-radius: 4px;
                    padding: 0 9px;
                    display: flex;
                    align-items: center;
                  "
                  @click="showPassageway = true"
                >
                  {{ filedValue.passageway }}
                </view>
                <u-action-sheet
                  :show="showPassageway"
                  :actions="passageway_actions"
                  title="请选择支付通道"
                  @close="showPassageway = false"
                  @select="sexSelect2"
                  style="height: 0"
                ></u-action-sheet>
              </view>
              <view
                style="display: flex; flex-direction: column; margin-top: 40rpx"
              >
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  商户号
                </span>
                <u-input
                  placeholder="请输入商户号"
                  border="surround"
                  v-model="filedValue.merchant_no"
                  style="background: #eae3ff"
                ></u-input>
              </view>
              <view
                style="display: flex; flex-direction: column; margin-top: 40rpx"
              >
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  终端号
                </span>
                <u-input
                  placeholder="请输入终端号"
                  border="surround"
                  v-model="filedValue.terminal_no"
                  style="background: #eae3ff"
                ></u-input>
              </view>
            </view>
            <view class="button" @click="configSubmit2">保存</view>
          </view>
          <view v-if="curNow === 2">
            <view style="margin-top: 34rpx; margin-bottom: 34rpx">
              <view style="display: flex; flex-direction: column">
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  机号
                </span>
                <u-input
                  placeholder="请输入机号"
                  border="surround"
                  v-model="filedValue.machine_no"
                  style="background: #eae3ff"
                ></u-input>
              </view>
              <view
                style="display: flex; flex-direction: column; margin-top: 40rpx"
              >
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  工号
                </span>
                <u-input
                  placeholder="请输入工号"
                  border="surround"
                  v-model="filedValue.job_no"
                  style="background: #eae3ff"
                ></u-input>
              </view>
              <view
                style="display: flex; flex-direction: column; margin-top: 40rpx"
              >
                <span
                  style="
                    font-weight: 700;
                    font-size: 28rpx;
                    line-height: 40rpx;
                    color: white;
                    margin-bottom: 32rpx;
                  "
                >
                  计量品条码前缀
                </span>
                <u-input
                  placeholder="请输入计量品条码前缀"
                  border="surround"
                  v-model="filedValue.barcode_prefix"
                  style="background: #eae3ff"
                ></u-input>
              </view>
            </view>
            <view class="button" @click="configSubmit3">保存</view>
          </view>
        </view>
      </view>
    </view>
  </u-popup>
</template>

<script>
export default {
  props: ["show", "close", "filedValue"],
  data() {
    return {
      flag: true,
      list: ["基础配置", "移动支付", "零售单"],
      curNow: 0,
      showPassageway: false,

      passageway_actions: [
        {
          name: "银联通道",
        },
        {
          name: "建行通道",
          disabled: true,
        },
      ],
    };
  },
  methods: {
    downloadOffline() {
      uni.showLoading({
        title: "正在加载离线数据",
        mask: true,
      });
      // sqLite
      // uni.request({
      //   url: "http://localhost:20001/levitas",
      //   method: "POST",
      //   data: {
      //     table: "",
      //     stmt: "DROP TABLE goods;",
      //   },
      //   success: (res) => {
      //     uni.request({
      //       url: "http://localhost:20001/levitas",
      //       method: "POST",
      //       data: {
      //         table: "",
      //         stmt: "CREATE TABLE IF NOT EXISTS goods (sku_code NVARCHAR,sku_attribute NVARCHAR,sku_Last_purchase_price NVARCHAR,sku_barcode NVARCHAR,sku_brand NVARCHAR,sku_name NVARCHAR,sku_price NVARCHAR,sku_standards NVARCHAR);",
      //       },
      //       success: (res) => {
      //         uni.request({
      //           url: "https://1to2to3.cn/rds2/service/exec",
      //           method: "POST",
      //           data: {
      //             project: "小进销存商品库下载",
      //             list: [
      //               {
      //                 name: "GetSkuList",
      //                 database: uni.getStorageSync(
      //                   "quake_sales_inventory_config"
      //                 ).data_source,
      //                 params: {},
      //                 password: "cdaflsirolaq0d0kavqg",
      //               },
      //             ],
      //           },
      //           success: (res) => {
      //             uni.request({
      //               url: "http://localhost:20001/levitas",
      //               method: "POST",
      //               data: {
      //                 table: '"goods"',
      //                 data: res.data[0].Data,
      //               },
      //               success: (res) => {
      //                 uni.hideLoading();
      //                 uni.showToast({
      //                   title: "加载成功",
      //                 });
      //               },
      //             });
      //           },
      //         });
      //       },
      //     });
      //   },
      // });
      // sqLite

      // localstorage
      uni.request({
        url: "https://1to2to3.cn/rds2/service/exec",
        method: "POST",
        data: {
          project: "小进销存商品库下载",
          list: [
            {
              name: "GetSkuList",
              database: uni.getStorageSync("quake_sales_inventory_config")
                .data_source,
              params: {},
              password: "cdaflsirolaq0d0kavqg",
            },
          ],
        },
        success: (res) => {
          uni.setStorageSync("goods", res.data[0].Data);
          uni.hideLoading();
          uni.showToast({
            title: "加载成功",
          });
        },
      });
      // localstorage
    },
    goTo() {
      this.flag = false;
    },
    goBack() {
      this.flag = true;
    },
    configSubmit() {
      if (
        this.filedValue.data_source === "" ||
        this.filedValue.email_address === ""
      ) {
        uni.showToast({
          title: "请填写字段",
          icon: "error",
        });
      } else {
        uni.showLoading({ mask: true });
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
                      org_id: this.filedValue.org_id,
                    },
                  },
                ],
              },
            },
          },
          success: ({ data }) => {
            if (data.count === 0) {
              uni.request({
                url: "https://1to2to3.cn/rds2/service/create",
                method: "POST",
                data: {
                  auth: 2,
                  project: "quake_sales_inventory",
                  table: "config",
                  data: [
                    {
                      org_id: this.filedValue.org_id,
                      data_source: this.filedValue.data_source,
                      email_address: this.filedValue.email_address,
                      autoboot: this.filedValue.autoboot ? 1 : 0,
                    },
                  ],
                },
                success: () => {
                  uni.hideLoading();
                  uni.showToast({
                    title: "保存成功",
                  });
                  uni.setStorageSync("quake_sales_inventory_config", {
                    ...(uni.getStorageSync("quake_sales_inventory_config") ||
                      {}),
                    org_id: this.filedValue.org_id,
                    data_source: this.filedValue.data_source,
                    email_address: this.filedValue.email_address,
                    autoboot: this.filedValue.autoboot,
                  });
                },
              });
            } else {
              uni.request({
                url: "https://1to2to3.cn/rds2/service/update-by-query",
                method: "POST",
                data: {
                  auth: 2,
                  project: "quake_sales_inventory",
                  table: "config",
                  query: {
                    and: [{ match: { org_id: this.filedValue.org_id } }],
                  },
                  data: {
                    data_source: this.filedValue.data_source,
                    email_address: this.filedValue.email_address,
                    autoboot: this.filedValue.autoboot ? 1 : 0,
                  },
                },
                success: () => {
                  uni.hideLoading();
                  uni.showToast({
                    title: "更新成功",
                  });
                  uni.setStorageSync("quake_sales_inventory_config", {
                    ...(uni.getStorageSync("quake_sales_inventory_config") ||
                      {}),
                    org_id: this.filedValue.org_id,
                    data_source: this.filedValue.data_source,
                    email_address: this.filedValue.email_address,
                    autoboot: this.filedValue.autoboot,
                  });
                },
              });
            }
          },
        });
      }
    },
    configSubmit2() {
      if (
        this.filedValue.passageway === "" ||
        this.filedValue.merchant_no === "" ||
        this.filedValue.terminal_no === ""
      ) {
        uni.showToast({
          title: "请填写字段",
          icon: "error",
        });
      } else {
        uni.request({
          url: "https://1to2to3.cn/rds2/service/update-by-query",
          method: "POST",
          data: {
            auth: 2,
            project: "quake_sales_inventory",
            table: "config",
            query: {
              and: [{ match: { org_id: this.filedValue.org_id } }],
            },
            data: {
              passageway: this.filedValue.passageway,
              merchant_no: this.filedValue.merchant_no,
              terminal_no: this.filedValue.terminal_no,
            },
          },
          success: () => {
            uni.hideLoading();
            uni.showToast({
              title: "更新成功",
            });
            uni.setStorageSync("quake_sales_inventory_config", {
              ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
              org_id: this.filedValue.org_id,
              passageway: this.filedValue.passageway,
              merchant_no: this.filedValue.merchant_no,
              terminal_no: this.filedValue.terminal_no,
            });
          },
        });
      }
    },
    configSubmit3() {
      if (
        this.filedValue.machine_no === "" ||
        this.filedValue.job_no === "" ||
        this.filedValue.barcode_prefix === ""
      ) {
        uni.showToast({
          title: "请填写字段",
          icon: "error",
        });
      } else {
        uni.request({
          url: "https://1to2to3.cn/rds2/service/update-by-query",
          method: "POST",
          data: {
            auth: 2,
            project: "quake_sales_inventory",
            table: "config",
            query: {
              and: [{ match: { org_id: this.filedValue.org_id } }],
            },
            data: {
              machine_no: this.filedValue.machine_no,
              job_no: this.filedValue.job_no,
              barcode_prefix: this.filedValue.barcode_prefix,
            },
          },
          success: () => {
            uni.hideLoading();
            uni.showToast({
              title: "更新成功",
            });
            uni.setStorageSync("quake_sales_inventory_config", {
              ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
              org_id: this.filedValue.org_id,
              machine_no: this.filedValue.machine_no,
              job_no: this.filedValue.job_no,
              barcode_prefix: this.filedValue.barcode_prefix,
            });
          },
        });
      }
    },
    sectionChange(index) {
      this.curNow = index;
    },
    sexSelect2(e) {
      this.filedValue.passageway = e.name;
    },
  },
};
</script>

<style scoped>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}
.content {
  width: 86.4vw;
  height: 100%;
}
.manage-index {
  margin: 16rpx 32rpx 0 44rpx;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.manage-index-1 {
  display: flex;
}
.manage-index-2 {
  margin-top: 60rpx;
}
.divide {
  height: 2rpx;
  background: rgba(255, 255, 255, 0.3);
  margin-top: 24rpx;
}
.manage-index-3 {
  display: flex;
  flex-wrap: wrap;
}
.m {
  width: 143rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28rpx;
  color: white;
  font-weight: 700;
}
.m_img {
  height: 108rpx;
  width: 100%;
}
.manage-index-4 {
  margin-top: 24rpx;
}
.manage-index-5 {
  /* margin-bottom: 60rpx; */
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10rpx;
  height: 72rpx;
  color: #8a61ff;
  font-weight: 400;
  font-size: 24rpx;
  line-height: 34rpx;
  margin-top: 60rpx;
}
</style>
