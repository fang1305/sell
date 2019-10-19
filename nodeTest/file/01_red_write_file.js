// 引入核心对象fs
const fs = require('fs');

// 读取文件
fs.readFile('./01_red_write_file.js','utf8',(err,data)=>{
	if(err){
		throw err; 
		// 抛到控制台显示异常信息
	}
	console.log(data) //十六进制数据
	// 需要获取字符串数据,就可以调用buffer篮子.toString(编码)函数
	// console.log(data.toString('utf8'));
})

// I or O
// I: input 计算机来说,就是输入
// O: output 计算机来说,展现/写入数据就是输出
// fs.writeFile(path,data||string,callback)
fs.writeFile('./01_red_write_file.jss','我今天赚了一块钱',{flag:'a'},(err,data)=>{
	// window中目录层级超级深的时候,写入就会报错
	if(err) throw err;
	console.log('文件')
})


// 追加方式1: appendFile('path',data,callback);
fs.appendFile('./atxt','我今天赚了好多钱呢',(err)=>{
	if(err) throw err;
	console.log('追加成功')
})
