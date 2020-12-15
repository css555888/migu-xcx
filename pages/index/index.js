// 0.引入发送请求的方法
import { request} from "../../request/index"

wx-Page({
  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:[],
    catesList:[],
    floorList:[]

  },


  // 页面刚开始加载就会触发
  onLoad: function (options) {  
    // 1.轮播图异步请求  使用promise优化异步请求
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   method: 'GET', 
    //   success: (res) =>{
    //     this.setData({
    //       swiperList:res.data.message
    //     })
    //   },
    // })
    this.getSwiperList();
    this.getcatesList();
    this.getfloorList();
  },
  // 获取轮播图数据
  getSwiperList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"}).then(res =>{
      this.setData({
        swiperList:res.data.message
      })
    })
  },
  // 获取分类导航数据
  getcatesList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"}).then(res =>{
      this.setData({
        catesList:res.data.message
      })
    })
  },
  // 获取楼层数据
  getfloorList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"}).then(res =>{
      this.setData({
        floorList:res.data.message
      })
    })
  },


})