//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  //全局变量
  globalData: {
    userInfo: null,
    goods: [{
      id: 0,
      name: "苹果手机1",
      minPrice: "5000.00",
      pic: "/page/weui/allgoods/goods1.jpg"
    },
    {
      id: 2,
      name: "苹果手机2",
      minPrice: "3000.00",
      pic: "/page/weui/allgoods/goods2.jpg"
    },
    {
      id: 3,
      name: "华为手机3",
      minPrice: "2100.00",
      pic: "/page/weui/allgoods/goods3.jpg"
    }, {
      id: 4,
      name: "华为手机4",
      minPrice: "1800.00",
      pic: "/page/weui/allgoods/goods4.jpg"
    },
    {
      id: 5,
      name: "华为手机6",
      minPrice: "4500.00",
      pic: "/page/weui/allgoods/goods5.jpg"
    }, {
      id: 6,
      name: "华为手机7",
      minPrice: "3700.00",
      pic: "/page/weui/allgoods/goods6.jpg"
    },
    {
      id: 7,
      name: "华为手机8",
      minPrice: "800.00",
      pic: "/page/weui/allgoods/goods7.jpg"
    },
    {
      id: 8,
      name: "华为手机9",
      minPrice: "3300.00",
      pic: "/page/weui/allgoods/goods8.jpg"
    }, {
      id: 9,
      name: "华为手机10",
      minPrice: "2050.00",
      pic: "/page/weui/allgoods/goods9.jpg"
    },
    {
      id: 10,
      name: "鼠标垫1",
      minPrice: "100.00",
      pic: "/page/weui/allgoods/goods10.jpg"
    },
    {
      id: 11,
      name: "pc电脑",
      minPrice: "3000.00",
      pic: "/page/weui/allgoods/goods11.jpg"
    },
    {
      id: 12,
      name: "任天堂游戏机",
      minPrice: "828.00",
      pic: "/page/weui/allgoods/goods12.jpg"
    }
    ]
  }
})