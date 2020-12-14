export const request=()=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url: 'https://URL',
            data: {},
            method: 'GET', 
            success: function(res){
               
            },
            fail: function() {
                
            },
            complete: function() {
                
            }
        })
    })
}