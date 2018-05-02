// pages/index/entity_shop/shop_classify/shop_classify2/shop_classify2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify:'',
    items:[
      { bt: "书房", txt1: '书桌', txt2: '书柜', txt3: '书架', txt4: '书椅', url1: 'shop_flagship/shop_flagship', url2: '' },
      { bt: "书房", txt1: '书桌', txt2: '书柜', txt3: '书架', txt4: '书椅', url1: '', url2: '' },
      { bt: "书房", txt1: '书桌', txt2: '书柜', txt3: '书架', txt4: '书椅', url1: '', url2: '' }
    ]
  },
  changeclassify:function(e){
    var id = e.currentTarget.dataset.index;  //获取自定义的ID值  
    this.setData({
      id: id
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