<template>
  <view class="u-page">
    <view class="u-demo-block">
      <view class="u-demo-block__content">
        <!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
        <u--form labelPosition="left" :model="model1" ref="form1">
          <!-- 源单 -->
          <u-form-item
            prop="userInfo.sex"
            labelWidth="80"
            borderBottom
            @click="
              showSex = true;
              hideKeyboard();
            "
            ref="item1"
          >
            <view class="top_text">
              <view class="top_text_blue"></view>
              <text class="top_text_text">源单</text>
              <u-input
                v-model="model1.userInfo.sex"
                disabled
                disabledColor="#ffffff"
                placeholder="点击选择(必选)"
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
          <!-- 退货时间 -->
          <u-form-item
            prop="userInfo.sex"
            borderBottom
            labelWidth="80"
            @click="
              showSex = true;
              hideKeyboard();
            "
            ref="item1"
          >
            <view class="top_text">
              <view style="flex-shrink: 0; display: flex; align-items: center">
                <view class="top_text_blue"></view>
                <text class="top_text_text">退货时间</text>
              </view>
              <text
                style="
                  text-align: right;
                  width: 100%;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 20px;
                "
              >
                默认今日
              </text>
            </view>
          </u-form-item>
          <!-- 仓库 -->
          <u-form-item
            prop="userInfo.sex"
            borderBottom
            labelWidth="80"
            @click="
              showSex = true;
              hideKeyboard();
            "
            ref="item1"
          >
            <view class="top_text">
              <view class="top_text_blue"></view>
              <text class="top_text_text">仓库</text>
              <u-input
                v-model="model1.userInfo.sex"
                disabled
                disabledColor="#ffffff"
                placeholder="点击选择(必选)"
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
          <!-- 收款账户 -->
          <u-form-item
            prop="userInfo.sex"
            borderBottom
            labelWidth="80"
            @click="
              showSex = true;
              hideKeyboard();
            "
            ref="item1"
          >
            <view class="top_text">
              <view class="top_text_blue"></view>
              <text class="top_text_text">收款账户</text>
              <u-input
                v-model="model1.userInfo.sex"
                disabled
                disabledColor="#ffffff"
                placeholder="点击选择(必选)"
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
          <!-- 本次退款 -->
          <u-form-item
            label="本次退款"
            prop="userInfo.name"
            borderBottom
            labelWidth="80"
            ref="item1"
          >
            <u-input
              v-model="model1.userInfo.name"
              disabledColor="#ffffff"
              border="none"
              inputAlign="right"
            >
              <u--text text="元" slot="suffix" margin="0 0 0 26rpx"></u--text>
            </u-input>
          </u-form-item>
          <!-- 本次欠款 -->
          <u-form-item
            label="本次欠款"
            prop="userInfo.name"
            borderBottom
            labelWidth="80"
            ref="item1"
          >
            <u-input
              v-model="model1.userInfo.name"
              disabledColor="#ffffff"
              border="none"
              inputAlign="right"
            >
              <u--text text="元" slot="suffix" margin="0 0 0 26rpx"></u--text>
            </u-input>
          </u-form-item>
          <!-- 优惠率 -->
          <u-form-item
            label="优惠率"
            prop="userInfo.name"
            borderBottom
            labelWidth="80"
            ref="item1"
          >
            <u-input
              v-model="model1.userInfo.name"
              disabledColor="#ffffff"
              border="none"
              inputAlign="right"
            >
              <u--text text="%" slot="suffix" margin="0 0 0 26rpx"></u--text>
            </u-input>
          </u-form-item>
          <!-- 优惠额 -->
          <u-form-item
            label="优惠额"
            prop="userInfo.name"
            borderBottom
            labelWidth="80"
            ref="item1"
          >
            <u-input
              v-model="model1.userInfo.name"
              disabledColor="#ffffff"
              border="none"
              inputAlign="right"
            >
              <u--text text="元" slot="suffix" margin="0 0 0 26rpx"></u--text>
            </u-input>
          </u-form-item>
          <!-- 实退 -->
          <u-form-item
            label="实退"
            prop="userInfo.name"
            borderBottom
            labelWidth="80"
            ref="item1"
          >
            <u-input
              v-model="model1.userInfo.name"
              disabledColor="#ffffff"
              border="none"
              inputAlign="right"
            >
              <u--text text="元" slot="suffix" margin="0 0 0 26rpx"></u--text>
            </u-input>
          </u-form-item>
          <!-- 制单人 -->
          <u-form-item
            label="制单人"
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
                font-size: 14px;
                line-height: 20px;
              "
            >
              默认本账号
            </text>
          </u-form-item>
          <!-- 上传附件 -->
          <u-form-item
            label="上传附件"
            prop="userInfo.sex"
            borderBottom
            labelWidth="80"
            @click="
              showSex = true;
              hideKeyboard();
            "
            ref="item1"
          >
            <u-input
              v-model="model1.userInfo.sex"
              disabled
              disabledColor="#ffffff"
              placeholder="附件大小5M以内"
              border="none"
              inputAlign="right"
            ></u-input>
            <u-icon
              slot="right"
              name="arrow-right"
              style="margin-left: 26rpx"
            ></u-icon>
          </u-form-item>
          <!-- 备注 -->
          <u-form-item
            label="备注"
            prop="userInfo.name"
            borderBottom
            labelWidth="80"
            ref="item1"
          >
            <u--textarea
              placeholder="点击输入"
              v-model="model1.intro"
            ></u--textarea>
          </u-form-item>
        </u--form>
        <u-button
          type="primary"
          text="提交"
          customStyle="margin-top: 50px"
          @click="submit"
        ></u-button>
        <u-button
          type="error"
          text="重置"
          customStyle="margin-top: 10px"
          @click="reset"
        ></u-button>
        <u-action-sheet
          :show="showSex"
          :actions="actions"
          title="请选择性别"
          description="如果选择保密会报错"
          @close="showSex = false"
          @select="sexSelect"
        ></u-action-sheet>
        <u-calendar
          :show="showCalendar"
          mode="range"
          @confirm="calendarConfirm"
          @close="calendarClose"
          startText="住店"
          endText="离店"
          confirmDisabledText="请选择离店日期"
          :formatter="formatter"
        ></u-calendar>
        <u-code
          ref="uCode"
          @change="codeChange"
          seconds="20"
          @start="disabled1 = true"
          @end="disabled1 = false"
        ></u-code>
        <u-datetime-picker
          :show="showBirthday"
          :value="birthday"
          mode="date"
          closeOnClickOverlay
          @confirm="birthdayConfirm"
          @cancel="birthdayClose"
          @close="birthdayClose"
        ></u-datetime-picker>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      fileList1: [],
      disabled1: false,
      tips: "",
      value: "",
      showCalendar: false,
      showBirthday: false,
      model1: {
        userInfo: {
          name: "",
          sex: "",
          birthday: "",
        },
        radiovalue1: "苹果",
        checkboxValue1: [],
        intro: "",
        code: "",
      },
      showSex: false,
      birthday: Number(new Date()),
      actions: [
        {
          name: "男",
        },
        {
          name: "女",
        },
        {
          name: "保密",
        },
      ],
      rules: {
        "userInfo.name": [
          {
            type: "string",
            required: true,
            message: "请填写姓名",
            trigger: ["blur", "change"],
          },
          {
            // 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
            validator: (rule, value, callback) => {
              // 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
              return uni.$u.test.chinese(value);
            },
            message: "姓名必须为中文",
            // 触发器可以同时用blur和change，二者之间用英文逗号隔开
            trigger: ["change", "blur"],
          },
        ],
        code: {
          type: "string",
          required: true,
          len: 4,
          message: "请填写4位验证码",
          trigger: ["blur"],
        },
        "userInfo.sex": {
          type: "string",
          max: 1,
          required: true,
          message: "请选择男或女",
          trigger: ["blur", "change"],
        },
        radiovalue1: {
          type: "string",
          min: 1,
          max: 2,
          message: "橙子有毒",
          trigger: ["change"],
        },
        checkboxValue1: {
          type: "array",
          min: 2,
          required: true,
          message: "不能太宅，至少选两项",
          trigger: ["change"],
        },
        intro: {
          type: "string",
          min: 3,
          required: true,
          message: "不低于3个字",
          trigger: ["change"],
        },
        hotel: {
          type: "string",
          min: 2,
          required: true,
          message: "请选择住店时间",
          trigger: ["change"],
        },
        "userInfo.birthday": {
          type: "string",
          required: true,
          message: "请选择生日",
          trigger: ["change"],
        },
      },
      radiolist1: [
        {
          name: "苹果",
          disabled: false,
        },
        {
          name: "香蕉",
          disabled: false,
        },
        {
          name: "毒橙子",
          disabled: false,
        },
      ],
      checkboxList1: [
        {
          name: "羽毛球",
          disabled: false,
        },
        {
          name: "跑步",
          disabled: false,
        },
        {
          name: "爬山",
          disabled: false,
        },
      ],
    };
  },
  onReady() {
    // 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
    this.$refs.form1.setRules(this.rules);
  },
  methods: {
    afterRead(event) {
      this.fileList1.push({
        url: event.file,
        status: "uploading",
        message: "上传中",
      });
    },
    groupChange(n) {
      // console.log('groupChange', n);
    },
    radioChange(n) {
      // console.log('radioChange', n);
    },
    navigateBack() {
      uni.navigateBack();
    },
    sexSelect(e) {
      this.model1.userInfo.sex = e.name;
      this.$refs.form1.validateField("userInfo.sex");
    },
    change(e) {
      // console.log(e);
    },
    formatter(day) {
      const d = new Date();
      let month = d.getMonth() + 1;
      const date = d.getDate();
      if (day.month == month && day.day == date + 3) {
        day.bottomInfo = "有优惠";
        day.dot = true;
      }
      return day;
    },
    calendarConfirm(e) {
      this.showCalendar = false;
      this.model1.hotel = `${e[0]} / ${e[e.length - 1]}`;
      this.$refs.form1.validateField("hotel");
    },
    codeChange(text) {
      this.tips = text;
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        // 模拟向后端请求验证码
        uni.showLoading({
          title: "正在获取验证码",
        });
        setTimeout(() => {
          uni.hideLoading();
          // 这里此提示会被this.start()方法中的提示覆盖
          uni.$u.toast("验证码已发送");
          // 通知验证码组件内部开始倒计时
          this.$refs.uCode.start();
        }, 2000);
      } else {
        uni.$u.toast("倒计时结束后再发送");
      }
    },
    calendarClose() {
      this.showCalendar = false;
      this.$refs.form1.validateField("hotel");
    },
    birthdayClose() {
      this.showBirthday = false;
      this.$refs.form1.validateField("userInfo.birthday");
    },
    birthdayConfirm(e) {
      this.showBirthday = false;
      this.model1.userInfo.birthday = uni.$u.timeFormat(e.value, "yyyy-mm-dd");
      this.$refs.form1.validateField("userInfo.birthday");
    },
    submit() {
      // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
      this.$refs.form1
        .validate()
        .then((res) => {
          console.log("res", res);
          uni.$u.toast("校验通过");
        })
        .catch((errors) => {
          uni.$u.toast("校验失败");
        });
    },
    reset() {
      const validateList = [
        "userInfo.name",
        "userInfo.sex",
        "radiovalue1",
        "checkboxValue1",
        "intro",
        "hotel",
        "code",
        "userInfo.birthday",
      ];
      this.$refs.form1.resetFields();
      this.$refs.form1.clearValidate();
      setTimeout(() => {
        this.$refs.form1.clearValidate(validateList);
        // 或者使用 this.$refs.form1.clearValidate()
      }, 10);
    },
    hideKeyboard() {
      uni.hideKeyboard();
    },
  },
};
</script>

<style lang="scss">
.u-page {
  padding: 0 40rpx;
}
.top_text {
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.top_text_blue {
  width: 16rpx;
  height: 16rpx;
  background: #8a61ff;
  border-radius: 9999px;
  margin-right: 10rpx;
}
.top_text_text {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.split {
  width: 100%;
  height: 16rpx;
  background: #ebebeb;
}
</style>
