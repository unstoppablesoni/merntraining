//program to write area of circle, triangle , rectangle by switch statement.
let area = "rectangle";
let PI = 3.14 , l = 10 , b = 5 , r = 2;

switch(area){
    case 'circle':
        console.log("area of circle is " + (PI*r**2));
        break;
    case  'triangle':
        console.log("area of triangle is " + (l*b)/2);
        break;
    case 'rectangle':
        console.log("area of rectangle is " + (l*b)); 
        break;
    default:
        console.log("enter the valid data ");
        break;          
}