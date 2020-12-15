// promise封装异步请求
export const request=(params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params, 
            success:(res)=>{
                resolve(res);
            },
            fail:(err)=>{
                reject(err);
            }
           
        })
    })
}