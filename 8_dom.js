// DOM-Document Object Model
// This is a way in which javascript interacts  with and manipulates webpages
// The DOM represents the html document in a tree structure (javascript object)with methods and properties to allow javascript access,modify and create elements on the page,dynamically changing content and behavior


// Accessing elemnts 
/**
 * document.getElementsByTagName(tagname)
 * document.getElementsByClassName(class)
 * document.getElemntById(id)
 */ 
 
 // Each element is an object with its own properties and methods to manipulate it(e.g. change text content, chage inner html/children, add or remove or change attributes ,styles and event listeners,)
 
 console.log( document.getElementsByTagName("p").length );

 let myP= document.getElementById("testelement")
 console.log(myP);
 myP.style.backgroundColor="green"
 myP.textContent="Benaiah Lagat"

  myP.setAttribute("class","newp")

  myP.addEventListener("click",handleClicking)
  

  let count=0
  function handleClicking(){
    count++
    console.log("Element clicked!!!" + count + "items");

    document.querySelector(".modal").style.display="block"
    
  }

