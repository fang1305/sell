// 引入核心对象
const path = require('path') 	// path没有写路径(核心对象)
				// path在node.exe中

// 	3段路径来自不同用户的输入
//   	//one//  two   ///three///
const mypath = path.join(__dirname,'//one//','//two//','///three///');

//console.log(mypath);

// 根据相对路径,返回绝对路径
// 对程序来说,./xxx.js非要一个绝对路径
const str = './abc/efg.js';
let temp = path.resolve(str);
console.log(temp)

// 接收一段字符串路径
let myPath = path.join(__dirname,'jack','make','mick.txt');

// 解析路径为对象,更易于操作
let pathObj = path.parse(myPath);
console.log(pathObj)

// base可以作为修改文件名,或后缀方式
pathObj.base = 'mick_die.good'

// 接收路径对象,转换成路径字符串
myPath = path.format(pathObj)
console.log(myPath)


