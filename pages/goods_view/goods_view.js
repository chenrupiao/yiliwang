// pages/goods_view/goods_view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:1,
    disabled: true,
    disabled2: false,
    close: 'active',
    close2: '',
    imgurl: '../../image/vf-icon2.png',
    text: '收藏',
    Class: '',
    isScroll: true,
    imgUrls: [
      '/image/pic8.png',
      '/image/pic8.png',
      '/image/pic8.png',
      '/image/pic8.png',
      '/image/pic8.png'
    ],
  },
  open: function (e) {
    this.setData({
      close: 'active2',
      close2: 'active3',
      isScroll: false
    })
  },
  close: function (e) {
    this.setData({
      close: 'active',
      close2: '',
      isScroll: true
    })
  },
  guanzhu: function (e) {
    var Class = this.data.Class;
    if (Class == 'active3') {
      this.setData({
        Class: '',
        imgurl: '../../image/vf-icon2.png',
        text: '收藏',
      })
    } else {
      this.setData({
        Class: 'active3',
        imgurl: '../../image/vf-icon2-2.png',
        text: '已收藏',
      })
    }
  },
  buttonchange: function (e) {
    var value = this.data.value;
    var disabled = this.data.disabled;
    var disabled2 = this.data.disabled2;
    console.log(value)
    if (value > 1) {
      value = value - 1;
      disabled = false;
      disabled2 = false;
    }
    if (value <= 2) {
      value = value - 1;
      disabled = true;
    }
    this.setData({
      value: value,
      disabled2: disabled2,
      disabled: disabled
    })
  },
  buttonchange2: function (e) {
    var value = this.data.value;
    var disabled = this.data.disabled;
    var disabled2 = this.data.disabled2;
    console.log(value)
    if (value < 9) {
      value = value + 1;
      disabled = false;
      disabled2 = false;
    }
    if (value >= 8) {
      value = value + 1;
      disabled2 = true;
    }
    this.setData({
      value: value,
      disabled: disabled,
      disabled2: disabled2
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var res = wx.getSystemInfoSync()
    var imgwidth = 750,
      imgheight = 750,
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