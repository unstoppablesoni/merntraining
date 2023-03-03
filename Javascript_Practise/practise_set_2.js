// use logical operator to find the age of person lies between 10 and 20.

let age = 18;
if(age>10 && age<20){
    console.log("yes your age lies between 10 and 20")
}
else{
    console.log("invalid age")
}

//demonstrate the use of switch case statement

let n = 18;
switch(n){
    case '1':
        console.log("your age is 1")
        break;
    case '2':
        console.log("your age is 2")
        break;
    case '14':
        console.log("your age is 14")
        break;
    case '18':
        console.log("your age is 18")
        break;
     default:
        console.log("your age is not specified")
      break;  
 
}


// javascript program to find whether the number is divisible by 2 and 3.

let num = 12;
if(num%2==0 && num%3==0){
    console.log(`${num} is divisible by 2 and 3`)
}
else{
    console.log(`${num} is not divisible by 2 and 3`)
}

//ternary operator question

let age1 = 19;
let a = age1>18 ? "you can drive" : "you cannot drive"
console.log(a);