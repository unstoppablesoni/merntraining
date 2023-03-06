//fat arrow function
const sum = (a,b) => {
    return a+b;
}
console.log(sum(10,20));

//another example of fat arrow function
const mult = (p,q) => {
  return p*q;
}
console.log(`the multiplication of p and q are ${5*2}`);

//another example more shorter form
const sub =(x,y)=> `the subtarction of x and y are ${20-5}`;
console.log(sub());

//normal function
function add(a,b){
    let total = a+b;
    console.log(total);
}
add(50,20);

// let addition = (a,b)=> `the addition of a and b are ${60+25}`;
// console.log(addition());

let addition = (a,b)=>{
    return a+b;
}
console.log(addition(15,8));