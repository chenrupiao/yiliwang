// pages/index/entity_mall/entity_mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Class:'',
    imgUrls: [
      '/image/banner.png',
      '/image/banner.png',
      '/image/banner.png',
      '/image/banner.png',
      '/image/banner.png'
    ],
    items:[
      { txt: '优惠券', jiage: '￥3000减100' },
      { txt: '优惠券', jiage: '￥3000减100' },
      { txt: '优惠券', jiage: '￥3000减100' },
      { txt: '优惠券', jiage: '￥3000减100' },
      { txt: '优惠券', jiage: '￥3000减100' }
    ]
  },
  changeclass:function(e){
    var Class = this.data.Class;
    if(Class==''){
      this.setData({
        Class: 'active'
      })
    }else{
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