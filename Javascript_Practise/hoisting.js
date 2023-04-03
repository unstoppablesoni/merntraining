//hoisting example
console.log(myName);
var myName = "Deepak";

//scope chain and lexical scoping example
let a = "hello guys";
const first = ()=>{
    let b = "how are you?";
    const second = ()=>{
        let c = " hii, i am fine guys";
        console.log(a+b+c);
        }
        second();
}
first();