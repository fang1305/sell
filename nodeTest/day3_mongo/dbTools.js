const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:8880';
const dbName = 'yyf';
// 客户端连接服务
MongoClient.connect(url,function (err,client) {
    // 获取db对象,再获取集合对象(操作数据)
    const col = client.db(dbName).collection('yyf');
    col.insert([
        {a:1,b:1},
        {a:2,b:2},
        {a:3,b:3},
        {a:4,b:4},{w:1},function (err,result) {
        if (err) throw err; // 插入异常
        col.find().toArray(function (err,docs) {
            console.log(docs);
            client.close(); // 关闭连接,放回mongodb的连接池
        })
    }])
})