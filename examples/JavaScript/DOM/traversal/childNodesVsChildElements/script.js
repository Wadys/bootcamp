let parentContainer = document.getElementById('parent');
let childNodes = parentContainer.childNodes;
console.log('childNodes:', childNodes); // Includes text nodes (like whitespace)
let children = parentContainer.children;
console.log('children:', children); // Only element nodes
console.log('children:', children[0]); // Accessing the first child element
let parentContainer2 = document.getElementById('parent2');
let childNodes2 = parentContainer2.childNodes;
console.log(childNodes2);