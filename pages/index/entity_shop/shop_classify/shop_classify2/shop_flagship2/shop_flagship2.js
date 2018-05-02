// pages/index/entity_shop/shop_classify/shop_classify2/shop_flagship2/shop_flagship2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Class: '',
    Class2: '',
    url: '/image/arrow1.png',
    mall2content: [
      { urls: '/image/pic1.png', bt: 'kaimeng 皮床 时尚榻榻米 储物软床皮床双人床 简约皮床婚床 312 ', txt: '销量0件 ', txt2: '  林氏木业官方旗舰店', jg: '￥1650.00' },
      { urls: '/image/pic1.png', bt: 'kaimeng 皮床 时尚榻榻米 储物软床皮床双人床 简约皮床婚床 312 ', txt: '销量0件 ', txt2: '  林氏木业官方旗舰店', jg: '￥1650.00' },
      { urls: '/image/pic1.png', bt: 'kaimeng 皮床 时尚榻榻米 储物软床皮床双人床 简约皮床婚床 312 ', txt: '销量0件 ', txt2: '  林氏木业官方旗舰店', jg: '￥1650.00' },
      { urls: '/image/pic1.png', bt: 'kaimeng 皮床 时尚榻榻米 储物软床皮床双人床 简约皮床婚床 312 ', txt: '销量0件 ', txt2: '  林氏木业官方旗舰店', jg: '￥1650.00' },
      { urls: '/image/pic1.png', bt: 'kaimeng 皮床 时尚榻榻米 储物软床皮床双人床 简约皮床婚床 312 ', txt: '销量0件 ', txt2: '  林氏木业官方旗舰店', jg: '￥1650.00' }
    ]
  },

  changeclass: function (e) {
    var Class = this.data.Class;
    if (Class == '') {
      this.setData({
        Class: 'active'
      })
    } else {
      this.setData({
        Class: ''
      })
    }
  },
  changeclass2: function (e) {
    var Class2 = this.data.Class2;
    if (Class2 == '') {
      this.setData({
        Class2: 'active'
      })
    } else {
      this.setData({
        Class2: ''
      })
    }
  },
  changeurl: function (e) {
    var url = this.data.url;
    switch (url) {
      case '/image/arrow1.png':
        url = '/image/arrow.png';
        break;
      case '/image/arrow.png':
        url = '/image/arrow2.png';
        break;
      case '/image/arrow2.png':
        url = '/image/arrow.png';
        break;
    }
    this.setData({
      url: url
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