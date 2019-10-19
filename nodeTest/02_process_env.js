
console.log(process.env);

// 需求,如果执行该代码,在刘老师的机器,运行教师端kaikeba
// 不在刘老师机器上, 运行学生端

// 1. 获取环境变量中关键的值
// 相对var来说,var会提升成全局变量,let不会,就是块级{}
let stuOrTeacher = process.env.LOGNAME;
if(stuOrTeacher == 'zgzzzs'){
	console.log('教师端')
}else{
	console.log('学生端')
}

// 应用上,同样运行一个项目,在本机和真是服务器上区别
// 比如,你的机器可以一堆log,服务器不应该

