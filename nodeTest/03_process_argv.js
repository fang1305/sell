// 接收命令行参数

console.log(process.argv);

// 需求: 命令行加法计算器
// process.argv => [node绝对路径,文件的绝对路径,1,2,3]

// 获取数组的2,3索引对应的元素
let num1 = process.argv[2] - 0;
let num2 = process.argv[3] - 0;  // parseInt也可

console.log('计算中')

let sum = num1+num2;
setTimeout(()=>{
   console.log('结果为:'+sum)
},2000);
