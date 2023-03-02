// 1.) create a variable of type string and add a number to it.

let a = "deepak";
let b = 10;
console.log(a+b);

// use of typeof operator to find the datatype of the string

console.log(typeof(a+b))

//create a const object in js. can you change it to hold a number later on it.

const item = {
    name1: "deepak1",
    role: "frontend developer",
    salry: "65000/monthly"
}
//item = 20; not possible to add any other item in const 
console.log(item)

//try to add new key in const object 
item['name1']="soni",
item['salry']="85000/monthly";
console.log(item)

//wap of js to create a word-meaning dictionary of 5 words.

const dic = {
    apple: "sebh",
    orange: "santra",
    banana: "kela",
    grapes: "angoor",
    pineapple: "ananaas"
}
console.log(dic);