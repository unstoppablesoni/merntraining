//map method

const array1 = [1,4,9,16,25];

let newArr = array1.map((curElm,index,arr) => {
    return curElm > 9;
});
// console.log(array1);
console.log(newArr);

//find square root of each element.

let arr = [25,36,49,64,81];

let sqrArr = arr.map((curElm)=>{
    return Math.sqrt((curElm));
});
console.log(sqrArr);
// console.log(arr);

// multiply each element by 2 and return only those which are greater than 10.

let arr1 = [2,3,4,6,8];

let newArr1 = arr1.map((curElm)=>{
    return curElm*2;
}).filter((curElm)=>{
    return curElm>10;
});
console.log(arr1);
console.log(newArr1);

// reduce method used to flatten the array from 3d or 2d to 1d array.

let myNumbers = [85,75,95,65,78];

let myTotal = myNumbers.reduce((accumulator,curElm,index,arr)=>{
    return accumulator+=curElm;
});
console.log(myTotal);


//how to flatten an array?
//converting 2d array to 1d array.

const twoArr = [
           ['zone_1','zone_2'],
           ['zone_3','zone_4'],
           ['zone_5','zone_6'],
           ['zone_7','zone_8']
];

let oneArr = twoArr.reduce((accum,currElm)=>{
      return accum.concat(currElm);
});
console.log(oneArr);