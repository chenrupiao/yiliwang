// pages/my2/business/theme_manage/theme_manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    id:0,
    index2:0,
    array: [
      { src: '/image/pic6.png', txt: '旺铺基础版' },
      { src: '/image/pic6.png', txt: '旺铺标准版' },
      { src: '/image/pic6.png', txt: '旺铺旗舰版' }
    ]
  },
  changeclass: function (e) {
    var id = e.currentTarget.dataset.index;  //获取自定义的ID值  
    this.setData({
      id: id,
      index: id
    })
  },
  changelist:function(e){
   var index = this.data.index;
   this.setData({
     index2:index
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