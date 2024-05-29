// Data types definr the kind of information a variable can hold
// there are two main categories of data  types in js
// primitives/simple data types :_String, Number ,BigInt, Boolean ,Undefined,Null
// Primitive data types old a single Value
let age=25
let maxNum=98436427462n // n at the end lables this memorey as of type bigint
let isPresent= false
let user
let startingPoint=null
let city="Eldoret"

// We can use the typeof operator tou check the data type of a value/variable
console.log(typeof age)
console.log(typeof maxNum)
console.log(typeof isPresent)
console.log(typeof  user)
console.log(typeof startingPoint)
console.log(typeof city)


// Assigment : Differenciate between undefined and not defined in js

// non-primitive /composite /complex .Refrence data types;- object ,array ,function
// non-primitive data types are more complex and store collections of datal

let car={
    brand:"Toyota",
    model:"Vitz",
    year: 2024,
    locallyAssembled: true,
    color:" red",
    start: function start(){
        console.log("car sratring!!");
        console.log("vroommm!!!");
    }
}
// car is an object
car.start()
console.log(car);
console.log(typeof car);
// objects are made up of key-value pairs separated by a comma
// the key and the value are separated by a full-colon
// we use bracket notation or dot notation to access individual value stored in an objet 
// for example:- to check the color of the car
console.log(car.color); // dot notation
// to check the car brand
console.log(car["brand"]); // bracket notation
// dot notation is considerd a clearner option by most developers and bracket notation is used on need basis.

// ARRAY,function


// Array
const cars=[ "toyota" ,"mazda", "subaru" ,78 ,true ,[1,2,3]]
// arrays can take data of any type
const students=[{name:"james", age:12}, {name:"joy" ,age:22, height:5.8}, {name:"john" ,age:32}]
// in most cases we'll be using arrays to store related data

// arrays are special objects 
// arrays are zeo indexed
// we use the bracket notation
console.log( cars[0] );//toyota
console.log( cars[3] ); //78

// the age for the second student
console.log( students[1].age); //22
