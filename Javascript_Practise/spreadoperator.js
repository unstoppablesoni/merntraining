//example to showing use of spread operator in array.
const colors = ['pink','blue','red','green','grey'];

const myFavColors = [...colors,'black','rosy red'];
console.log(myFavColors);

//example of spread operator in objects as the feature of ES2018

const person = {
    name:'fred',
    age:87
};
console.log(person);
//use of spread operator here below with ...
const sPerson = {...person};
console.log(sPerson);