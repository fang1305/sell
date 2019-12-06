const http = require('http');
const fs = require('fs');

// 设计两个接口,返回index.html
// /test只用write 不用end => 默认来讲,页面会一直转
// 如果用ajax
let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('./index.html',(err,data)=>{
            res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
            res.end(data);
        });
    }else if(req.url === '/test' && req.method === 'GET'){
        // 告知客户端可以一点一点的显示 octet(八位字符)
        // res.writeHead(200,{'content-type':'application/octet'});
        res.writeHead(200,{'content-type':'application/octet-stream'});
        setInterval(() => {
            res.write(''+Date.now());            
        }, 1000);
    }
}).listen(8880);
