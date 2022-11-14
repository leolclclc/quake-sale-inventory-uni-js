<template>
  <view class="content">
    <view class="search">
      <text style="font-weight: 400; font-size: 28rpx">某某某店</text>
      <image
        src="@/static/drop-down.png"
        alt=""
        style="
          width: 16rpx;
          height: 16rpx;
          margin-left: 8rpx;
          margin-right: 24rpx;
        "
      />
      <u-search placeholder="搜索" :show-action="false"></u-search>
    </view>
    <view class="tab">
      <u-tabs :list="list1">
        <view
          slot="right"
          style="padding-left: 4px"
          @tap="$u.toast('插槽被点击')"
        >
          <u-icon name="list" size="21" bold></u-icon>
        </view>
      </u-tabs>
    </view>
    <view class="main">
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
      <view @click="goTo('/pages/management-side/information/components/edit')">
        <view
          style="
            width: 160px;
            height: 120px;
            background: #b6b9ff;
            flex-grow: 0;
            margin-bottom: 8rpx;
          "
        ></view>
        <view
          style="
            width: 100%;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
          "
        >
          商品名
        </view>
      </view>
    </view>
  </view>
</template>

<script>
const lineBg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=';
export default {
  mixins: [uni.$u.mixin],
  data() {
    return {
      lineBg,
      list1: [
        {
          name: '全部',
        },
        {
          name: '生鲜果蔬',
        },
        {
          name: '肉禽鱼蛋',
        },
        {
          name: '生鲜果蔬',
        },
        {
          name: '音乐',
        },
        {
          name: '美食',
        },
        {
          name: '文化',
        },
        {
          name: '财经',
        },
        {
          name: '手工',
        },
      ],
    };
  },
  methods: {
    click(item) {
      console.log('item', item);
    },
    goTo(path) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style scoped>
.search {
  padding: 16rpx 40rpx;
  display: flex;
  align-items: center;
  box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
}
.tab {
  padding: 0 40rpx;
  box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
}
.main {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32rpx;
  padding: 24rpx 40rpx;
}
</style>
