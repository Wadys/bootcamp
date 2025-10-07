let heading = document.getElementById("main-title");
console.log(heading);

let paragraphs = document.getElementsByClassName("content");
console.log(paragraphs); // HTMLCollection of elements with class "content"
console.log(paragraphs.length); // Number of elements with class "content"
console.log(paragraphs[0]); // First element with class "content"

let divElements = document.getElementsByTagName("div");
console.log(divElements); // HTMLCollection of all <div> elements
console.log(divElements[1]); // Second <div> element]

let paragrapharray = Array.from(paragraphs);
console.log(paragrapharray); // Converts HTMLCollection to an array
console.log(typeof paragrapharray); // "object"

for (let para of paragrapharray) {
    console.log(para.innerText); // Logs text content of each paragraph
}