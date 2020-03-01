//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '/page/weui/index/swiper1.jpg',
      '/page/weui/index/swiper2.jpg',
      '/page/weui/index/swiper3.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iconArray: [
      {
        "iconUrl": '/page/weui/index/tianmao.png',
        "iconText": '天猫'
      },
      {
        "iconUrl": '/page/weui/index/baokuan.png',
        "iconText": '爆款'
      },
      {
        "iconUrl": '/page/weui/index/guoji.png',
        "iconText": '国际'
      },
      {
        "iconUrl": '/page/weui/index/eleme.png',
        "iconText": '饿了么'
      },
      {
        "iconUrl": '/page/weui/index/chaoshi.png',
        "iconText": '超市'
      },
      {
        "iconUrl": '/page/weui/index/fenlei.png',
        "iconText": '分类'
      },
      {
        "iconUrl": '/page/weui/index/meishi.png',
        "iconText": '美食'
      },
      {
        "iconUrl": '/page/weui/index/tuhuo.png',
        "iconText": '土货'
      }
    ],
    itemArray: [
      {
        "itemUrl": '/page/weui/index/dazhe1.jpg',
        "itemText": '热门精品'
      },
      {
        "itemUrl": '/page/weui/index/dazhe2.jpg',
        "itemText": '收藏精品'
      },
      {
        "itemUrl": '/page/weui/index/dazhe3.jpg',
        "itemText": '有好货'
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  tabChange(e) {
    console.log('tab change', e)
  }
})
