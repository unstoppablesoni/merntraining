//closures in js
const outerFun = (a)=>{
let b = 10;
const innerFun = ()=>{
    let sum = a+b;
    console.log(`the sum of two numbers is ${sum}`);
}
innerFun();
}
outerFun(5);