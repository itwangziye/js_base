// 箭头函数
// 函数的快捷写法，不需要通过 function 关键字创建函数，并且还可以省略 return 关键字。

// 同时，箭头函数还会继承当前上下文的 this 关键字。

// [1, 2, 3].map(x => x + 1);  // [2, 3, 4]

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ES6 对象和数组
// # 析构赋值
// 析构赋值让我们从 Object 或 Array 里取部分数据存为变量。

// 对象
// const user = { name: 'guanguan', age: 2 };
// const { name, age } = user;
// console.log(`${name} : ${age}`);  // guanguan : 2

// // 数组
// const arr = [1, 2];
// const [foo, bar] = arr;
// console.log(foo);  // 1

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 对象字面量改进
// 这是析构的反向操作，用于重新组织一个 Object 。

// const name = 'duoduo';
// const age = 8;

// const user = { name, age };  // { name: 'duoduo', age: 8 }
// 定义对象方法时，还可以省去 function 关键字。

// app.model({
//   reducers: {
//     add() {}  // 等同于 add: function() {}
//   },
//   effects: {
//     *addRemote() {}  // 等同于 addRemote: function*() {}
//   },
// });

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Spread Operator 即 3 个点 ...，有几种不同的使用方法。

// 可用于组装数组。

// const todos = ['Learn dva'];
// [...todos, 'Learn antd'];  // ['Learn dva', 'Learn antd']
// 也可用于获取数组的部分项。

// const arr = ['a', 'b', 'c'];
// const [first, ...rest] = arr;
// rest;  // ['b', 'c']

// // With ignore
// const [first, , ...rest] = arr;
// rest;  // ['c']

// const foo = {
//     a: 1,
//     b: 2,
//   };
//   const bar = {
//     b: 3,
//     c: 2,
//   };
//   const d = 4;
  
//   const ret = { ...foo, ...bar, d };  // { a:1, b:3, c:2, d:4 }
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
