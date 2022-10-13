"use strict";
let fn;
fn = () => 'test';
console.log(fn);
//c? is optional
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(10, 5);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
// result="dasdsad"//error
