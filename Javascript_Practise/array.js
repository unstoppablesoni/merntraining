//normal array
const animals = ['cat','cow','dog','goat','buffalo'];
console.log(animals);

//check particular element in an array
const friends = ['ramesh','suresh','mukesh','rajesh'];
console.log(friends[2]);

//to check last element in an array
console.log(friends[friends.length-1]);

//to check length of an array
console.log(friends.length);

//use of for loop in an array
let birds = ['parrot','peacock','crow','sparrow','hen','eagle'];

for(let i=0; i<birds.length; i++){
    console.log(birds[i]);
}

//FOR IN LOOP in array always gives you index numbers or key of the elements in an array.

let clothes =['jeans','shirts','trousers','pants','t-shirts'];

for(let elements in clothes){
    console.log(elements);
}

//FOR OF LOOP in array always provides the values of the array list.
let cars=['bmw','suzuki','toyota','thar','ferrari'];

for(let elements of cars){
    console.log(elements);
}

//FOR EACH LOOP in array
//calls a function for each element in an array

let bikes =['fz','r15','cbr250','bullet'];

bikes.forEach(function(element,index,array){
    console.log(element,index);
});

//2.) searching and filter in an array.

//a.) array.prototype.indexOf() search the element in an array from starting position and if not found then show -1.

let bikess =['fz','r15','cbr250','bullet'];
console.log(bikess.indexOf('cbr250',2));

//b.) array.prototype.lastIndexOf() search the element in an array from last position to starting and if not found then show -1.

let cars1=['bmw','suzuki','toyota','thar','ferrari','thar'];
console.log(cars1.lastIndexOf('thar',3));

//c.) array.prototype.includes()

let buddies = ['abhay','pankaj','vaibhav','tushar','vishal'];
console.log(buddies.includes('pankaj'));

//now filter methods in an array
//a.) array.prototype.find()

const prices = [300,200,100,150,500,750,520];
// const findElm = prices.find((currVal)=>{
//     return currVal>300;
// });
// console.log(findElm);
console.log(prices.find((currVal)=>currVal>200));

//b.) array.prototype.findIndex()

const rates = [10,20,30,40,50];
// const fndElm = rates.findIndex((currVal)=>{
//     return currVal<40;
// });
// console.log(fndElm);
console.log(rates.findIndex((currVal)=>currVal<40));


//c.) array.prototype.filter() !important method

const rate = [5,25,10,15,500,42];
const flt = rate.filter((currVal)=>{
    return currVal>25;
});
console.log(flt);
