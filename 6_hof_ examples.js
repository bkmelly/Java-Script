function compareFn(a, b){
    if( a<b){
        //a is less than b by soe odering criterion
        return-1;

    }else if(a>b){
        // a is greater than b by ordering criterion
        return 1;
    }
    // must be equal to b
    return 0;

}

let myArr=[12,22,43,11,32,12,22,323,43,12,323,500,34]
console.log(myArr.sort(compareFn));

// other js arry hof -reduce,forEach,map,filter

// write code to suggest names in aa search feature
const names=["albert","jones","emmanuel","vitalis","wendy","Benaiah","sandar","brian","joseph","edwin"]

const result=names.filter(function fName(name){
if(name.includes("e")){
    return true;
}
return false;
})

console.log(result);

// function searchNames(names,input){
//    return names.filter(function fName(name){
//         if(name.includes("e")){
//             return true;
//         }
//         return false;
//         })
// }

// console.log(searchNames(names,"e"));



/*Arrow Functions-- a cleaner way of writing functions (without the function keyword)*/ 
const filterByAge=(people)=>{
    people.filter(person=>person.age>35? true:false)
}
const people=[]

console.log(filterByAge(people,50));










function filterByGroup(input){

}


//using map method create a new array(with all people) to add a prefix Mr or Mrs on the people's names depending on their gendre

//write a function filterByGroup("Kalenjin"),that takes in any ethnic group as input returns a list of people from that ethinc group, if none, log that there are no people from the "input ethnic group

// sort People by Age with Oldest First
// find Average Age by ethnicity


/*Use Case*/ 
// you can use it to find the average age by ethnicity

// anonymus function
//arrow functions