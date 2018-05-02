// pages/index/entity_shop/entity_shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Class: '',
    items:[
      { url: '/image/pic1.png', txt: '林氏家具 实木床简欧式软包皮床储物家具 象牙白1.8*2.0' },
      { url: '/image/pic1.png', txt: '林氏家具 实木床简欧式软包皮床储物家具 象牙白1.8*2.0' },
      { url: '/image/pic1.png', txt: '林氏家具 实木床简欧式软包皮床储物家具 象牙白1.8*2.0' },
      { url: '/image/pic1.png', txt: '林氏家具 实木床简欧式软包皮床储物家具 象牙白1.8*2.0' }
    ],
    items2: [
      { url: '/image/pic1.png', txt: '林氏家具 实木床简欧式软包皮床储物家具 象牙白1.8*2.0', jg: '￥1000.00' },
      { url: '/image/pic1.png', txt: '林氏家具 实木床简欧式软包皮床储物家具 象牙白1.8*2.0', jg: '￥1000.00' },
      { url: '/image/pic1.png', txt: '林氏家具 实木床简欧式软包皮床储物家具 象牙白1.8*2.0', jg: '￥1000.00' },
      { url: '/image/pic1.png', txt: '林氏家具 实木床简欧式软包皮床储物家具 象牙白1.8*2.0', jg: '￥1000.00' }
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