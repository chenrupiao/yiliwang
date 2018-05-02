// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    arrays:[
      { txt: '卧室' },
      { txt: '客厅' },
      { txt: '餐厅' },
      { txt: '书房' },
      { txt: '儿童房' },
      { txt: '户外/阳台' },
      { txt: '办公家具' },
      { txt: '灯饰照明' },
      { txt: '厨房用品' },
      { txt: '家居饰品' },
      { txt: '布艺织物' },
      { txt: '卧室' },
      { txt: '卧室' },
      { txt: '卧室' },
      { txt: '卧室' },
      { txt: '卧室' }
    ],
    items:[
      { ids: 'classify0', bt: '卧室', txt1: '床', url1: '../goods_view/goods_view', pic1: '/image/pic7.png', txt2: '床', url2: '', pic2: '/image/pic6.png' },
      { ids: 'classify1', bt: '客厅', txt1: '床', url1: '', pic1: '/image/pic7.png', txt2: '床', url2: '', pic2: '/image/pic6.png' },
      { ids: 'classify2', bt: '餐厅', txt1: '床', url1: '', pic1: '/image/pic7.png', txt2: '床', url2: '', pic2: '/image/pic6.png' },
      { ids: 'classify3', bt: '书房', txt1: '床', url1: '', pic1: '/image/pic7.png', txt2: '床', url2: '', pic2: '/image/pic6.png' }
    ],
    toView:''
  },
  changeclass: function (e) {
    var id = e.currentTarget.dataset.index;  //获取自定义的ID值  
    this.setData({
      id: id,
      toView: 'classify' + id
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