# Construction
This repo is composed by two folders, of which one is the in-class exercise and the other is homework.

Each folder has its own .js and .html file. The preview link is as below:

https://zoeyzou.github.io/hyf-homework/JavaScript/JavaScript-3/week9/homework/index.html

# Learning Target
The key points of this week's study is more about promise, e.g. `Promise.all`; also covered more about `this` keyword and how to determine what `this` points to under below circumstances:

The `this` keyword evaluates to:
1. Global scope: window
2. Function scope: 
    2.1 If called on an object this evaluates to the object
    2.2 called thorugh special functions like bind, call, apply, see documentation
    2.3 In other cases this evalueates to window
    2.4 arrow function: this keyword is taken from the enclosing scope
