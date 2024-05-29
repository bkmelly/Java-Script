// Write a function `mergeArrays(arr1, arr2)` that takes two arrays `arr1` and `arr2` and merges them into a single array, with the elements sorted in ascending order.

function mergeArrays(arr1, arr2){
//     //merge
//     let finalArray=arr1
//     for(let index=0; index<arr2.lenght; index++){
//         finalArray.push(arr2[index])
//         console.log("looping" + index);
//     }

//     finalArray=finalArray.sort()
//     console.log(finalArray);
//     //sort
//     //return merged array
// }
// mergeArrays(["red", "blue","yellow"],[23, 788, "purplee"])
//
return arr1.concat(arr2).sort() 
}
console.log(mergeArrays(["Red","Blue","'","yellow"], [23,788,"purple"]) );

