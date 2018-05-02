// pages/index/local_entity/local_entity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id1:0,
    id2:0,
    id3:0,
    id4:0,
    items:[
      { txt: '区域', imageurl: '/image/xiajt2.png', display: false },
      { txt: '风格', imageurl: '/image/xiajt2.png', display: false },
      { txt: '类型', imageurl: '/image/xiajt2.png', display: false },
      { txt: '商圈', imageurl: '/image/xiajt2.png', display: false }
    ],
    items2:[
      { txt: '全部' },
      { txt: '西湖' },
      { txt: '江干' },
      { txt: '滨江' },
      { txt: '下城' },
      { txt: '萧山' },
      { txt: '上城' },
      { txt: '余杭' },
      { txt: '拱墅' },
      { txt: '临安' },
    ],
    items3: [
      { txt: '全部2' },
      { txt: '西湖' },
      { txt: '江干' },
      { txt: '滨江' },
      { txt: '下城' },
      { txt: '萧山' },
      { txt: '上城' },
      { txt: '余杭' },
      { txt: '拱墅' },
      { txt: '临安' },
    ],
    items4: [
      { txt: '全部3' },
      { txt: '西湖' },
      { txt: '江干' },
      { txt: '滨江' },
      { txt: '下城' },
      { txt: '萧山' },
      { txt: '上城' },
      { txt: '余杭' },
      { txt: '拱墅' },
      { txt: '临安' },
    ],
    items5: [
      { txt: '全部4' },
      { txt: '西湖' },
      { txt: '江干' },
      { txt: '滨江' },
      { txt: '下城' },
      { txt: '萧山' },
      { txt: '上城' },
      { txt: '余杭' },
      { txt: '拱墅' },
      { txt: '临安' },
    ],
    Class:'',
    array:[
      { url: '/image/pic1.png', txt1: '杭州新世纪家具城', txt2: '经营范围：卧室家具、客厅家具、餐厅家具', url2: '/image/icon1.png', txt3: '杭州 江干区下沙街道四季广场 4楼', bj: '', bj2: 'red', txt4: '预约直播', txt5: '进入商城' },
      { url: '/image/pic1.png', txt1: '杭州新世纪家具城', txt2: '经营范围：卧室家具、客厅家具、餐厅家具', url2: '/image/icon1.png', txt3: '杭州 江干区下沙街道四季广场 4楼', bj: 'white', bj2: 'red', txt4: '预约直播', txt5: '进入店铺' },
      { url: '/image/pic1.png', txt1: '杭州新世纪家具城', txt2: '经营范围：卧室家具、客厅家具、餐厅家具', url2: '/image/icon1.png', txt3: '杭州 江干区下沙街道四季广场 4楼', bj: 'white', bj2: 'red', txt4: '预约直播', txt5: '进入店铺' },
      { url: '/image/pic1.png', txt1: '杭州新世纪家具城', txt2: '经营范围：卧室家具、客厅家具、餐厅家具', url2: '/image/icon1.png', txt3: '杭州 江干区下沙街道四季广场 4楼', bj: 'white', bj2: 'red', txt4: '预约直播', txt5: '进入店铺' },
      { url: '/image/pic1.png', txt1: '杭州新世纪家具城', txt2: '经营范围：卧室家具、客厅家具、餐厅家具', url2: '/image/icon1.png', txt3: '杭州 江干区下沙街道四季广场 4楼', bj: 'white', bj2: 'red', txt4: '预约直播', txt5: '进入店铺' }
    ]
  },
  changenav:function(e){
    var id = e.currentTarget.dataset.index;  //获取自定义的ID值 
    var value = this.data.items[id].display; 
    this.data.items[id].display = !value;
    var display = this.data.items[id].display; 
    if(display){
      this.setData({
        id: id,
        Class: 'active'
      })
    }else{
      this.setData({
        id: 5,
        Class: ''
      })
    }
    
  },
  close:function(e){
    for(var i=0;i<=3;i++){
      this.data.items[i].display = false;
    }
    this.setData({
      Class:'',
      id:5
    })
  },
  changes:function(e){
    var id = e.currentTarget.dataset.index;  //获取自定义的ID值  
    this.setData({
      id1: id
    })
  },
  changes2: function (e) {
    var id = e.currentTarget.dataset.index;  //获取自定义的ID值  
    this.setData({
      id2: id
    })
  },
  changes3: function (e) {
    var id = e.currentTarget.dataset.index;  //获取自定义的ID值  
    this.setData({
      id3: id
    })
  },
  changes4: function (e) {
    var id = e.currentTarget.dataset.index;  //获取自定义的ID值  
    this.setData({
      id4: id
    })
  },
  reset:function(e){
    this.setData({
      id1: 0,
      id2: 0,
      id3: 0,
      id4: 0
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