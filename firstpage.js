/**
 * Created by lenovo on 2015/11/9.
 * 第一个应用 连接http 使用8848端口
 * 用户在浏览器中输入对应网址，返回输出hello 8848
 */
    //载入http模块
var http = require("http");

http.createServer(function(request,response)
{

    //发送http头部
    //http状态值 :200 ok
    //内容类型 text/plain
    response.writeHead(200,{'Contenet-Type':'text/plain'});
    //发送响应数据
    response.end('Hello 8848!')
}).listen(8848);

console.log('Server running at http://127.0.0.1:8848');