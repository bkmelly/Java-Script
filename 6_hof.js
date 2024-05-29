// higher order functions


// These are functions that can take other functions as arguments or return functions

function fOne(){
console.log("running/excecuting function One");
}

function fTwo(){
    console.log("running/excecuting function Two");
}

function fThree(cbf) {
console.log("running F three");
cbf()
console.log("completing F Three");
}

fThree(fTwo)

fThree(fOne)

fThree(function anotherF(){
    console.log("excecuting another Function");
})

// the function being passed as an argument to another function is called a call back function



f