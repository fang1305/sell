import originJsonp from 'jsonp'

export default function jsonp(url,data,option) {
    // url: 请求地址
    // data: 拼到url上的参数
    url += (url.indexOf('?')<0?'?':'&')+param(data);

    return new Promise((reslove,reject)=>{
        originJsonp(url,option,(err,data)=>{
            if(!err){
                reslove(data)
            }else{
                reject(err)
            }
        })
    })
}

// 把data对接拼接到url
function param(data) {
    let url = '';
    for(var k in data){
        let value = data[k] !== undefined?data[k]:'';
        url += `&${k}=${encodeURIComponent(value)}`
    }    
    return url ? url.substring(1):'';
}