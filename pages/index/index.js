// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/banner.png',
      '../../image/banner.png',
      '../../image/banner.png',
      '../../image/banner.png',
      '../../image/banner.png'
    ],

  },
  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function (options) {
    var res = wx.getSystemInfoSync()
    var imgwidth = 750,
      imgheight = 460,
      //宽高比  
      ratio = imgwidth / imgheight;

    //计算的高度值  
    var viewHeight = res.windowWidth / ratio;
    var imgheight = viewHeight
    this.setData({
      imgheights: imgheight,
    })
  },
  scroll: function (e) {
    var that = this, scrollTop = that.data.scrollTop;
    that.setData({
      scrollTop: e.detail.scrollTop
    })
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