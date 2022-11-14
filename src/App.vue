<script>
export default {
  onLaunch: function () {
    console.log("App Launch");

    plus.runtime.getProperty(plus.runtime.appid, function (widgetInfo) {
      uni.request({
        url: "https://1to2to3.cn/rds2/service/query",
        method: "POST",
        data: {
          auth: 2,
          project: "applet",
          table: "uni_applets",
          conditions: {
            fields: [],
            query: {
              and: [
                {
                  match: {
                    appid: widgetInfo.appid,
                    name: "小进销存",
                  },
                },
              ],
            },
          },
        },
        success: (result) => {
          const data = result.data;
          if (data.data[0].versionCode !== widgetInfo.versionCode) {
            uni.showToast({
              title: "正在更新...",
              icon: "none",
            });
            uni.downloadFile({
              url: data.data[0].url,
              success: (downloadResult) => {
                if (downloadResult.statusCode === 200) {
                  plus.runtime.install(
                    downloadResult.tempFilePath,
                    {
                      force: false,
                    },
                    function () {
                      uni.showToast({
                        title: "更新成功",
                        icon: "none",
                        duration: 1000,
                      });
                      setTimeout(() => {
                        plus.runtime.restart();
                      }, 1000);
                    },
                    function (e) {
                      uni.showToast({
                        title: "更新失败,请重启",
                        icon: "none",
                      });
                    }
                  );
                }
              },
            });
          }
        },
      });
    });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
/*每个页面公共css */
html,
body,
#root {
  font-family: "PingFang SC";
  font-style: normal;
}
</style>
