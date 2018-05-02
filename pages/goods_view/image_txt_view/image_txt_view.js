// pages/goods_view/image_txt_view/image_txt_view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 1,
    disabled: true,
    disabled2: false,
    close: 'active',
    close2: '',
    imgurl: '/image/vf-icon2.png',
    text: '收藏',
    Class: '',
    isScroll: true,
    navbar: ['图文详情', '规格参数','商品评价'],
    currentTab: 0,
    arrays:[
      { bj: '包装体积',txt: '1' },
      { bj: '品牌', txt: '林氏家具' },
      { bj: '型号', txt: '林氏家具' },
      { bj: '安装说明', txt: '林氏家具' },
      { bj: '款式定位', txt: '林氏家具' },
      { bj: '毛重', txt: '林氏家具' },
      { bj: '颜色分类', txt: '林氏家具' },
      { bj: '使用人数', txt: '林氏家具' },
      { bj: '尺寸', txt: '林氏家具' },
      { bj: '材质', txt: '林氏家具' },
      { bj: '工艺', txt: '林氏家具' },
      { bj: '产地', txt: '林氏家具' },
      { bj: '风格', txt: '林氏家具' }
    ]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
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
        imgurl: '/image/vf-icon2.png',
        text: '收藏',
      })
    } else {
      this.setData({
        Class: 'active3',
        imgurl: '/image/vf-icon2-2.png',
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