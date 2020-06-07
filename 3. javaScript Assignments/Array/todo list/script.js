var arr = [];
console.log("connected");
var userInput = prompt("Enter your choice:");
while (userInput !== "quit") {
  if (userInput === "new") {
    addToArray();
  } else if (userInput === "list") {
    listArray();
  } else if (userInput === "delete") {
    deleteFromArray();
  }
  var userInput = prompt("Enter your choice:");
}

//Add element to the array
function addToArray() {
  let element = prompt("Enter element:");
  arr.push(element);
  console.log("Element succesfully added");
  console.log(arr);
}

//Deleting element from the array

function deleteFromArray() {
  let indexOfElement = prompt("Enter the index of element to delete:");
  let deletedElement = arr.splice(indexOfElement, 1);
  console.log(`Deleted element is ${deletedElement}`);
  console.log(`Remaining elements are ${arr}`);
}

//Listing elements

function listArray() {
  console.log("***************************");
  arr.forEach(function (el, i) {
    console.log(`${i}: ${el}`);
  });
  console.log("***************************");
}
