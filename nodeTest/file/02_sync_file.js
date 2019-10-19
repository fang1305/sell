// 引入核心对象
const fs = require('fs');

// 先读后写(有异常catch)
let data = fs.readFileSync('./atxt','utf8')
console.log(data);
// 写到b.txt
fs.writeFileSync('./b.txt',data);

