import { request} from "../../request/index"

Page({

  data: {
    // 左侧菜单数据
    leftMenuList:[],
    // 右侧商品数据
    rightContent:[],
  },
  // 接口的返回数据
  Cates:[],


  onLoad: function (options) {
    this.getCates();
  },
  // 获取分类数据
  getCates(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"}).then(res =>{
      this.Cates = res.data.message;

      // 左侧大菜单数据
      let leftMenuList = this.Cates.map(v =>v.cat_name);
      // 右侧的商品数据
      let rightContent = this.Cates[0].children
      this.setData({
        leftMenuList,
        rightContent
      })
    })
  },

})