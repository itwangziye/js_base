//1. let,const的声明
// var命令和function命令。ES6 除了添加let和const命令，import命令和class命令。所以，ES6 一共有 6 种声明变量的方法
//块级作用域： ES6允许块级作用域的任意嵌套。外层作用域无法读取内层作用域的变量。
// 类似于 if、switch 条件选择或者 for、while 这样的循环体即是所谓的块级作用域；可以看做{}就是一个块级作用域；

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// var callbacks = [];
// for (var i = 0; i <= 2; i++) {
//     callbacks[i] = function () {
//             return i * 2;
//         };
// }

// console.log(callbacks[0]());
// console.log(callbacks[1]()); 
// console.log(callbacks[2]()); 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// var callbacks = [];
// for (var i = 0; i <= 2; i++) {
//     (function (i) {
//         callbacks[i] = function () {
//               console.log(i * 2) 
//         };
//     })(i);
// }
// callbacks[0]();
// callbacks[1]();
// callbacks[2]();

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let callbacks = []
// for (let i = 0; i <= 2; i++) {
//     callbacks[i] = function () {
//         console.log(i * 2) 
//     }
// }
// callbacks[0]() 
// callbacks[1]() 
// callbacks[2]() 

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//2. let提升
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// var 的情况
// console.log(foo); // 输出undefined
// var foo = 2;

// // let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 3.暂时性死区
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// var foo = 123;

// if (true) {
//   foo = 'abc'; // ReferenceError
//   let foo;
// }
/**可能 foo变量已经存在于块级作用域中，但是必须在声明之后才能被使用 */
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 4.同一个块级作用域，不能重复声明同一个变量
// 报错
// function func() {
//     let a = 10;
//     var a = 1;
//   }
  
  // 报错
//   function func() {
//     let a = 10;
//     let a = 1;
//   }
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
