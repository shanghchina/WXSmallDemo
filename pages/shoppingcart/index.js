// pages/shoppingcart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingList: [
      {
        shoppingImage: '/page/weui/shoppingcart/pingguo.jpg',
        shoppingTitle: '苹果手机 iphone8',
        shoppingPrice: '¥1920.00',
        shoppingPriceNum: '1920.00',
        shoppingNum: 1,
        shoppingShow: true
      },
      {
        shoppingImage: '/page/weui/shoppingcart/huawei1.jpg',
        shoppingTitle: 'HUAWEI HUAWEI Mate 30全网通正品5G',
        shoppingPrice: '¥3000.00',
        shoppingPriceNum: '3000.00',
        shoppingNum: 1,
        shoppingShow: true
      },
      {
        shoppingImage: '/page/weui/shoppingcart/huawei2.jpg',
        shoppingTitle: 'HUAWEI nova 5 Pro',
        shoppingPrice: '¥2800.00',
        shoppingPriceNum: '2800.00',
        shoppingNum: 1,
        shoppingShow: true
      }
    ],
    totolAmount: 6720
  },
  //重新计算商品总额
  goodsChanged: function () {
    var sum = 0;
    console.log(sum)
    for (var i = 0; i < this.data.shoppingList.length; i++) {
      if (this.data.shoppingList[i].shoppingShow){
        var QC = this.data.shoppingList[i].shoppingPriceNum[i];
        sum += parseFloat(QC);
      }
    }
    console.log(sum)

    this.setData({
      totalAmount: sum
    })
  },
  carAdd: function (event) {
    var that = this;
    var index = event.target.dataset.alphaBeta;
    var con = that.data.shoppingList[index].shoppingNum + 1;
    var key = 'shoppingList[' + index + '].shoppingNum';
    var obj = {};
    obj[key] = con;
    this.setData(obj);
    this.goodsChanged();
  },
  carReduce: function (event) {
    var that = this;
    var index = event.target.dataset.alphaBeta;
    var con = that.data.shoppingList[index].shoppingNum;
    var key = 'shoppingList[' + index + '].shoppingNum';
    var obj = {};
    if (con <= 1) {
      obj[key] = 1;
      that.setData(obj);
    }
    else {
      con--;
      obj[key] = con;
      that.setData(obj);
    }
    this.goodsChanged();
  },
  carRemove: function (event) {
    var that = this;
    var index = event.target.dataset.alphaBeta;
    var key = 'shoppingList[' + index + '].shoppingShow';
    var obj = {};
    obj[key] = false;
    this.setData(obj);

    this.goodsChanged();
  },
  toPay: function () {
    wx.navigateTo({
      url: '../shoppingpay/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})