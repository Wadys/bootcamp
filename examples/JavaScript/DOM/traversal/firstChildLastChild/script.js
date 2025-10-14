let parent = document.getElementById("parent");
let firstNode = parent.firstChild;
console.log(firstNode); // Text node (whitespace)
let lastNode = parent.lastChild;
console.log(lastNode); // Text node (whitespace)

let firstElement = parent.firstElementChild;
console.log(firstElement); // First child element
let lastElement = parent.lastElementChild;
console.log(lastElement); // Last child element 
