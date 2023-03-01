// 7 types of primitive datatypes in javascript 
// null , number , symbol , string , boolean , BigInt , undefined 

let a = null;
let b = 50;
let c = Symbol("i am a nice symbol");
let d = "deepak";
let e = true; // can also be false 
let f = BigInt("567")+ BigInt(10);
let g = undefined;

console.log(a,b,c,d,e,f,g);

//typeof is used to know the what type of datatype you used 

console.log(typeof e);

//objects in javascript are non-primitive datatypes

const item = {
    name: "toothpaste",
    price : "150",
}
console.log(item);

const info = {
    Name: "Deepak Soni",
    Role: "Frontend Developer",
    Salary: "65000/monthly"
}
console.log(info);
console.log(info["Salary"]);
//changing the name in object from deepak soni to deepak 
info['Name'] = "Deepak";
console.log(info);