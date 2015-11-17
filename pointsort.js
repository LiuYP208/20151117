/**
 * Created by lenovo on 2015/11/9.
 * 高阶函数测试
 */

var point = [40, 100, 1, 5, 25, 10];
point.sort(function (a, b) {
    return b - a;
});//由大到小

point.sort(function (a, b) {
    return b - a;
});//由小到大

console.log(point);

var toString = Object.prototype.toString;

//未进行偏函数之前的写法
var isString = function (obj) {
    return   toString.call(obj) == '[object String]';
}
var isFunction = function (obj) {
    return   toString.call(obj) == '[object Function]';
}

//使用偏函数对类似函数进行提取？？（什么形容啊）
var isType = function (type) {
    return function (obj) {
        return toString.call(obj) == '[object' + type + ']';
    };
};
//通过偏函数实现功能
var isString = isType('String');
var isFunction = isType('Function');


//after函数实现 调用time次后才真正执行方法

_.after = function (times, func) {
    if (times <= 0) return func();
    return function () {
        if (--time < 1) {
            return func.apply(this, arguments)
        }
    };
};