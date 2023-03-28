//1st way to create object in js

let bioData = {
    myName: "Deepak Soni",
    myAge: 24,

    getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }
}
//now call the function here
bioData.getData();

//2nd way to create object in js after es6 is easy that we dont even write function keyword as well to declare a function

let myMarks = {
    javascript : 75,
    css : 84,

    getMarks (){
        console.log(`my marks in javascript are ${myMarks.javascript} and marks in css are ${myMarks.css}`);
    }
}
myMarks.getMarks();

//3rd create a object within a object ?

let myBioData = {
    myName : {
        realName : "Deepak Soni",
        myRole: "Frontend Developer",
    },
    myAge : 24,

    getData (){
        console.log(`my name is ${myBioData.myName} and my age is ${myBioData.myAge}`);
    }
}
console.log(myBioData.myName.myRole);

//example of this 

const obj = {
    myAge:24,
    myName(){
        console.log(this);
    }
}
obj.myName();

//example of this using fat arrow function
const obj1={
    myAge:24,
    myName : () =>{
        console.log(this);
    }
}
obj.myName();