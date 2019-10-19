// 最好使用大文件进行测试

const fs = require('fs');

console.log('同步读取前');
// 同步
fs.readFileSync('./b.txt');
console.log('工作A')
console.log('我在读完以后执行的工作');

// 异步读取
console.log('异步读取钱')
fs.readFile('./b.txt',()=>{
	console.log('异步读取后')
})
console.log('工作B')
