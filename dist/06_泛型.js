"use strict";
// 在定义函数或者类时，如果遇到类型不明确的时候，可以使用泛型
//
function fn(a) {
    return a;
}
let a = fn(1);
console.log(a);
let b = fn('asdasda');
console.log(a, b);
