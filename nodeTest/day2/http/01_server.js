// 1. 引入核心对象http
const http = require('http');

// 2. 用这个创建服务器
let server = http.createServer();

// 3: 基于事件,很多的on('xxx')
server.on('request',(req,res)=>{
    // req是只读对象, 拿属性
    // res是只写对象, 掉函数
    console.log(req.header);    // 头
    console.log(req.url);       // 行
    console.log(req.method);    // 行
    // 写头
    //     1. 一次性写
    //     2. 多次写
    res.setHeader('a', 'a');
    res.setHeader('b', 'b');
    res.setHeader('c','c');
    // 一次性写一定在多次写的后边
    // res.writeHead(200,{'d','d'})
    
    // 写行 => 道理同上, 一次在多次后边
    res.writeHeader(200, {'content-type':'text/html;charset=utf-8'});
    // 写体
    res.write('窗前明月光');
    res.write('夏天心慌慌');
    // 一次性写在多次后边
    res.end('抬头看文字');
    
})

// IP 找计算机, 端口找程序
server.listen(8880,()=>{
    console.log('服务器启动在8888端口');

})