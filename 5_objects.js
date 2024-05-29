// Javascript built in standard objects provide essential functionalities for working with data ,manipulating strings,performing calculations, and more .this is made possible by their pre-defined property and methods.
// These objects include :-Object ,Array ,Math ,Date ,Json,among others .
// These objects are also available in the global scope so that they can be anywhere in the code without having to import /require
// 


/**
 *Object:-The base object from which all the other objects inherit.It Provides methods fo interacting with objects like creating new objects or checking if aproperty exists.
 *Array :-Provides a set of functions/methods and properties to manipulate arrays 
 * Math:-provides mathematical consonants and functions like calculating square roots,exponentation,and trigonometric functions.
 * Date:-Provides methods for getting different parts of the date(year,month day) and performing date calculations.
 * Json:-Used for textual data interchange.Json objects mimic javascript objects syntax and can be easily converted from javascript objects. 
 * 
 * 
 *  
  */
 
//  The browser comes built with additional set of global object to help work with html elements and browser itself .The same applies to other javascript environments like node js and bun js.


console.log(Math.sqrt(16));
console.log(Math.round(9.7));
console.log(Math.round(Math.random()*50));
let smallest = Math.min(23,41,4,53)
console.log(smallest);

console.log(new Date(Date.now()).toLocaleDateString());//epoch time
setInterval( ()=>{
    console.log(new Date (Date.now()).toLocaleTimeString());//epoch time
}, 1000)

let names=["joy","albert,victor"]
console.log(names.sort());
const winner= "Benaiah"
console.log(winner.startsWith("B"));// true

// array methods,string methods , object methods ,number methods
// asyncronous code
// global objects and global function?