for(let i=0; i<100; i++){
    console.log(i+1);
}

//sum of n natural number

let sum = 0;
let n = 4;

for(let i=0; i<4; i++){
    sum += i+1;
}
console.log(" sum of first " + n + " natural numbers " + sum)

//for in loop

let obj = {
    harry: 90,
    vikas: 50,
    akash: 70,
    deepak: 97
}
for(let p in obj){
    console.log(" marks of " + p + " are " + obj[p])
}