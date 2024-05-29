/* declaring a function: there are three methods of declaring a function:
fanction declaration: fantion name ,parameters<function body=> accessed at global level 
function expresion: a function declared and stored in a variable : classes ,local scope 
arrow function: for ease and expertise accesibility*/



// naming conventions functions : camel case,pascal,snake




// function declaration
// function name 
// parameters
// function block
// function call

// let firstname="John"
// let secondname="Mwangi"
// function getName(firstname,secondname){
    // console.log('${firstname} ${secondname}');
// }
// let userName =function getName(firstname,secondname){
        // console.log('$firstname}' {'$ secondname'});

// getName(firstname,secondname)
// function get;

// arrow function
// the short hand notation to variable nameing,used i call back functions,embeded functions 
// simplicity
let firstname="jenny"
let secondname='kiptoo'
let age=167;
let userName=(firstname, secondname)=>{
    return('${firstname ${secondname}' ,(age)=>{
})
console.log("hello");
}

// use any functional methods to calculate the perimeter of a triangle
// tips
// declare the sides variables
function getPerimeter(){
   
    console.log(side1+side2+side3);
    if(side1<=0|| side2<=0||side3<=0){
        console.log("error sides should be greater than 0");}
}  

let sides=3
let side1=5
let side2=5
let side3=5
getPerimeter()

function getName(myname,myage){
    return(myname,myage)
}
myname="benaiah"
myage="21"

let newAge= getName(myname,myage)
console.log(newAge);

// right a function that is used to get data from a person and calculate the area of a cuboid