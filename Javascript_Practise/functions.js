function sum(){
  let  a = 10 , b = 10;
  total=a+b;
  console.log(total);
}
sum()

function mult(){
    let p=2,q=3;
    console.log(p*q);
    sum()
}
mult()

function add(a, b){
    console.log(a+b);
}
add(10,20)
let adding = add(5,5);
adding;

//function with return keyword

function sub(a,b){
  return subtract = a-b;
}
sub(10,5);
console.log(subtract);

//anonymous function expression and anonymous function

let exp = function (p,q){
  return total = p+q;
}
console.log(exp(2,2));