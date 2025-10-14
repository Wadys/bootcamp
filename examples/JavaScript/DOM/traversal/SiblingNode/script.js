let firstSibling = document.getElementById("first-sibling");
console.log(firstSibling); // <div id="first-sibling">First Sibling</div>
let nextNode = firstSibling.nextSibling;
let previousNode = firstSibling.previousSibling;


console.log(nextNode); // #text (text node for the whitespace between the divs)
console.log(previousNode); // #Text (text node for the whitespace before the div)

let nextElement = firstSibling.nextElementSibling;
let previousElement = firstSibling.previousElementSibling;

console.log(nextElement); // <div id="second-sibling">Second Sibling</div>
console.log(previousElement); // null because there is no previous element