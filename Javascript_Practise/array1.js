//sort and compare in array.

//a.) array.prototype.sort()

const months = ['jan','dec','feb','march','april'];
console.log(months.sort());

//how to insert , add , replace and delete elements in array (CRUD).

//a.) array.push() - to add one or more element in end(END) of the array.

const animals =['pig','cat','dog'];
console.log(animals.push('cow','goat'));
console.log(animals);

//b.) array.unshift() - to add one or more element in an array in starting(STARTING).

const birds = ['hen','crow','peacock'];
birds.unshift('parrot');
console.log(birds);

//c.) array.pop() - to remove element from end in an array.
const fruits = ['apple','papaya','orange','lemon'];
console.log(fruits.pop());
console.log(fruits);

//d.) array.shift() - to remove element from starting of an array.
const item = ['biscuit','dal','toothpaste','surf'];
console.log(item.shift());
console.log(item);




//examples for practise of array methods using splice method

const Months = ['Jan','march','April','June','July'];
//add dec in last.
const NewMonths = Months.splice(Months.length,0,'Dec');
console.log(Months);

// update march to March.
const month = ['Jan','march','April','June','July'];
const updateMonth = month.splice(1,1,'March');
console.log(month);

//delete june from an array
const month1 = ['Jan','march','April','June','July'];
const dltMonth = month1.indexOf('June');

if(dltMonth != -1){
    const updateMonth = month1.splice(dltMonth,1);
    console.log(month1);
}
else{
    console.log('no such data found');
}
