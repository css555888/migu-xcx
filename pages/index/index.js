wx-Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:[]



  },

  /**
   * 生命周期函数--监听页面加载
   */

  // 页面刚开始加载就会触发
  onLoad: function (options) {
    
    // 1.轮播图异步请求  使用promise优化异步请求
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      method: 'GET', 
      success: (res) =>{
        this.setData({
          swiperList:res.data.message
        })
      },

    })

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