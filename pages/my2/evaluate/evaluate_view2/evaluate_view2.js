// pages/my2/evaluate/evaluate_view2/evaluate_view2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userStars: [
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png'
    ],
    userStars2: [
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png'
    ],
    userStars3: [
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png',
      '/image/wujiao1.png'
    ],
  },
  eviewmid: function () {
    wx.showActionSheet({
      itemList: ['拍照', '照片'],
      success: function (e) {
        console.log(e.tapIndex)
      }
    })
  },
  starTap: function (e) {
    var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    for (var i = 0; i < len; i++) {
      if (i <= index) { // 小于等于index的是满心
        tempUserStars[i] = '/image/wujiao2.png'
      } else { // 其他是空心
        tempUserStars[i] = '/image/wujiao1.png'
      }
    }
    // 重新赋值就可以显示了
    this.setData({
      userStars: tempUserStars
    })
  },
  starTap2: function (e) {
    var index2 = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars2; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    for (var i = 0; i < len; i++) {
      if (i <= index2) { // 小于等于index的是满心
        tempUserStars[i] = '/image/wujiao2.png'
      } else { // 其他是空心
        tempUserStars[i] = '/image/wujiao1.png'
      }
    }
    // 重新赋值就可以显示了
    this.setData({
      userStars2: tempUserStars
    })
  },
  starTap3: function (e) {
    var index3 = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars3; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    for (var i = 0; i < len; i++) {
      if (i <= index3) { // 小于等于index的是满心
        tempUserStars[i] = '/image/wujiao2.png'
      } else { // 其他是空心
        tempUserStars[i] = '/image/wujiao1.png'
      }
    }
    // 重新赋值就可以显示了
    this.setData({
      userStars3: tempUserStars
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