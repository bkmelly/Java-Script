function fOne() {
    console.log("normal function");
}

async function fTwo() {
    const data= await fetch("https:jsonplaceholder.typicode.com/users")
    const actualData=await data.json()

    console.log(actualData);
}

fTwo()
fOne()

// Synchronoous code is excecuted line by line,waiting for one operation to finish before moving to the next.if the operation takes time,like fetching data from a server,or performing very heavy calculations, the entire program halts/is paused until the operation is done.
// this can make an aplication unresponsive for awhile
// to avoid this ,for such time taking operations,we use assynchronous code
// Assychronous code/programming can start multipe operations at once and continue with other tasks while waiting for the slow operations to complete.
// this guarantees improved responsiveness and efficiency

//callacks can help achieve this by calling a function after an operation, and sometimes even nesting callbacks(multiple levels of callbacks/ callbackhell)
// however code  can get difficult to read with call backs ,hence the async...await and.then (promises) were in js through the task queue /event loop
