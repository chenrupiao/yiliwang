// pages/my2/personal_information/personal_information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018-03-06',
    time: '12:01'
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  pitouxiang: function () {
    wx.showActionSheet({
      itemList: ['拍照', '照片'],
      success: function (e) {
        console.log(e.tapIndex)
      }
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