/**
 * Created by lenovo on 2015/11/10.
 * 4.3异步编程解决方案
 * 事件发布、订阅模式
 */
var options =
{
    host: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};
var req=http.request(options,function(res){
console.log('STATUS:'+res.statusCode);
    console.log('HEADERS:'+JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on
});