/**
 * Created by lenovo on 2015/11/9.
 * 书中同步难点一节 练习测试
 */
//传统方式
var oldway = function{
    try {
        JSON.parse(json)
    } catch (e) {
//todosth
    }
};


//异步方式
var async = function (callback) {
    process.nextTick(function () {
            var results=something;
            if(error){
                return callback(error);
            }
            callback(null,results);
        }
    );
};