var fs = require("fs");
// 接收命令行参数,根据该目录,读取目录下的所有文件(遍历文件夹)
const path = require('path');
// 1: 接收命令行参数 node ./01_read_dir_files.js C://xxx//xxx//xx
// 2: 修正该路径 path.resolve(process.agrv[2]);
let inputPath = path.resolve(process.argv[2]);
testReadFiles(inputPath);

function testReadFiles(dir) {
    try {
        // 3: 判断该路径是否存在 fs.access(fs.constants.F_OK)
        fs.accessSync(dir, fs.constants.F_OK);
        // 4: 遍历该文件夹
        //	4.1 function(dir){ // 判断该路径是文件还是文件夹,如果是文件(输出),如果是文件夹,继续读取子文件夹,如果是文件夹,调用自身  }
        let state = fs.statSync(dir);
        if (state.isFile()) {
            console.log('不是文件夹')
        } else if (state.isDirectory()) {
            // 继续调用testReadFiles()函数
            // 是文件夹就读取子文件夹
            let files = fs.readdirSync(dir);
            files.forEach(file=>{
                // 调用自己这个函数,是文件夹输出,是文件夹,继续调用
                testReadFiles(path.join(dir,file));
            })
            // 同步
            console.log(files);
        }
    } catch (e) {
        console.log('该文件或文件夹不存在');
    }
}