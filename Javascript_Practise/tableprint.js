for(let num=1; num<=10; num++){
    let tableOf = 8;
    console.log(tableOf  + " * " + num + " = " + (tableOf*num));
}

//same program with while loop
let table=1;
while(table<=10){
    let tabof = 5;
    console.log(tabof + " * " + table + " = " + (tabof*table));
    table++;
}

// now with do-while loop
let a=1;
do{
    let digit = 2;
    console.log(digit + " * " + a + " = " + (digit*a));
    a++;
}while(a<=10)