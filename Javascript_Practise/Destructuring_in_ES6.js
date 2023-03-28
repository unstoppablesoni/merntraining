//destructuring in ES6

const myBioData = ['deepak','soni',24,'frontend developer',65000];

// let myFname = myBioData[0];
// let myLname = myBioData[1];
// let myAge = myBioData[2];

// console.log(myFname); //traditional way to get data

//now destructuring (array destructuring)

let [myFname ,myLname ,myAge,myRole,mySalary] = myBioData;
console.log(myRole);

//object destructuring

const bioData = {
    myFstname:'vinod',
    myLstname:'thapa',
    age:26
}
// let age = bioData.age;
// console.log(age);

let{myFstname,myLstname,age,mysalary=65000}=bioData;
console.log(mysalary);