<template></template>

<script>
export default {
  onLoad() {
    // uni.showLoading({
    //   title: "正在加载配置",
    //   mask: true,
    // });
    // uni.request({
    //   url: "https://1to2to3.cn/rds2/service/query",
    //   method: "POST",
    //   data: {
    //     auth: 2,
    //     project: "quake_sales_inventory",
    //     table: "config",
    //     conditions: {
    //       fields: [],
    //       query: {
    //         and: [
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
    //     if (data.count !== 0) {
    //       uni.setStorageSync("quake_sales_inventory_config", {
    //         ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
    //         username: "蔡建雄",
    //         org_id: 123456789,
    //         data_source: data.data[0].data_source,
    //         email_address: data.data[0].email_address,
    //         autoboot: data.data[0].autoboot ? true : false,
    //         passageway: data.data[0].passageway,
    //         merchant_no: data.data[0].merchant_no,
    //         terminal_no: data.data[0].terminal_no,
    //         machine_no: data.data[0].machine_no,
    //         job_no: data.data[0].job_no,
    //         barcode_prefix: data.data[0].barcode_prefix,
    //       });
    //     } else {
    //       uni.setStorageSync("quake_sales_inventory_config", {
    //         ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
    //         username: "蔡建雄",
    //         org_id: 123456789,
    //         data_source: "",
    //         email_address: "",
    //         autoboot: false,
    //         passageway: "",
    //         merchant_no: "",
    //         terminal_no: "",
    //         machine_no: "",
    //         job_no: "",
    //         barcode_prefix: "",
    //       });
    //     }
    //   },
    // });
    // uni.switchTab({
    //   url: "/pages/tabBar/stock/index",
    // });
    uni.request({
      url: "http://pv.sohu.com/cityjson?ie=utf-8",
      method: "POST",
      success: (res) => {
        const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
        let ip = reg.exec(res.data);
        console.log(ip[0]);
        uni.setStorageSync("quake_sales_inventory_config", {
          ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
          ip: ip[0],
        });
      },
    });
    this.init();
  },
  methods: {
    async init() {
      uni.sendNativeEvent(
        "getToken",
        {
          msg: "unimp message!!!",
        },
        async (e) => {
          console.log("getToken-----------回调" + JSON.stringify(e));
        }
      );
      uni.sendNativeEvent(
        "getOrgId",
        {
          msg: "unimp message!!!",
        },
        async (e) => {
          console.log("getOrgId-----------回调" + JSON.stringify(e));
        }
      );
      uni.onNativeEventReceive(async (event, data) => {
        const obj = typeof data === "string" ? JSON.parse(data) : data;

        switch (event) {
          case "getTokenReceive":
            uni.request({
              url: "https://1to2to3.cn/super-login/sys/me",
              method: "POST",
              header: {
                Authorization: `Bearer ${obj.token}`, //自定义请求头信息
              },
              success: ({ data }) => {
                uni.setStorageSync("quake_sales_inventory_config", {
                  ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
                  username: data.name,
                });
              },
            });
            break;
          case "getOrgIdReceive":
            uni.setStorageSync("quake_sales_inventory_config", {
              ...(uni.getStorageSync("quake_sales_inventory_config") || {}),
              // org_id: obj.org_id,
              org_id: 123456789,
            });
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
                          // org_id: obj.org_id,
                          org_id: 123456789,
                        },
                      },
                    ],
                  },
                },
              },
              success: ({ data }) => {
                if (data.count !== 0) {
                  uni.setStorageSync("quake_sales_inventory_config", {
                    ...(uni.getStorageSync("quake_sales_inventory_config") ||
                      {}),
                    data_source: data.data[0].data_source,
                    email_address: data.data[0].email_address,
                    autoboot: data.data[0].autoboot ? true : false,
                    passageway: data.data[0].passageway,
                    merchant_no: data.data[0].merchant_no,
                    terminal_no: data.data[0].terminal_no,
                    machine_no: data.data[0].machine_no,
                    job_no: data.data[0].job_no,
                    barcode_prefix: data.data[0].barcode_prefix,
                  });
                } else {
                  uni.setStorageSync("quake_sales_inventory_config", {
                    ...(uni.getStorageSync("quake_sales_inventory_config") ||
                      {}),
                    data_source: "",
                    email_address: "",
                    autoboot: false,
                    passageway: "",
                    merchant_no: "",
                    terminal_no: "",
                    machine_no: "",
                    job_no: "",
                    barcode_prefix: "",
                  });
                }
                resolve();
              },
            });

            break;

          default:
            break;
        }
      });
      try {
        // sqLite
        // await Promise.all([
        // new Promise((resolve, reject) => {
        //   uni.request({
        //     url: "http://localhost:20001/connection",
        //     method: "POST",
        //     data: { max: 1, db_url: "sqlite://test.db" },
        //     success: () => {
        //       resolve();
        //       uni.request({
        //         url: "http://localhost:20001/levitas",
        //         method: "POST",
        //         data: {
        //           table: "",
        //           stmt: "CREATE TABLE IF NOT EXISTS inventory_documents (id VARCHAR PRIMARY KEY NOT NULL,warehouse VARCHAR NOT NULL,prepared_by VARCHAR NOT NULL,count_date DATETIME NOT NULL,inventory_date DATETIME, status BIGINT, org_id BIGINT);",
        //         },
        //       });
        //       uni.request({
        //         url: "http://localhost:20001/levitas",
        //         method: "POST",
        //         data: {
        //           table: "",
        //           stmt: "CREATE TABLE IF NOT EXISTS inventory_goods (inventory_id VARCHAR NOT NULL,sku_name VARCHAR,sku_barcode VARCHAR,sku_code VARCHAR,sku_standards VARCHAR, sku_price VARCHAR, number BIGINT, goods_no BIGINT);",
        //         },
        //       });
        //     },
        //   });
        // }),
        // ]);
        // sqLite
        uni.hideLoading();
        uni.switchTab({
          url: "/pages/tabBar/stock/index",
        });
      } catch (error) {
        uni.showToast({
          title: "加载失败",
          icon: "error",
        });
      }
    },
  },
};
</script>


	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
