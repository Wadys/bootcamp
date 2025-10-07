let firstHeading = document.querySelector("h1"); // Selects the first <h1> element
console.log(firstHeading.textContent); // Outputs: "Welcome to My Page"

let firstParagraph = document.querySelector(".intro"); // Selects the first intro element
console.log(firstParagraph.textContent); // Outputs: "This is the first paragraph 
// with class 'intro'."

let allParagraphs = document.querySelectorAll(".intro"); // Selects all intro elements
console.log(allParagraphs); // Outputs a NodeList of all elements with class 'intro'

let firstListItem = document.querySelector("#list li"); // Selects the first <li>
// element inside the element with id 'list'
console.log(firstListItem.textContent); // Outputs: "Item 1"

let allListItems = document.querySelectorAll("#list li"); // Selects all <li> elements
// inside the element with id 'list'
console.log(allListItems); // Outputs a NodeList of all <li> elements inside #list

let allbuttons = document.querySelectorAll("button"); // Selects all <button> elements
console.log(allbuttons); // Outputs a NodeList of all <button> elements