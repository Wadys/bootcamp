let divElement = document.getElementById("sample-element");
console.log("Element:", divElement); // HTMLDivElement
console.log("Node Name:", divElement.nodeName); // "DIV"
console.log("Node Type:", divElement.nodeType); // 1 (Element Node)
let textNode = divElement.firstChild; // Assuming the first child is a text node
console.log("Text Node:", textNode);
console.log("Node Name:", textNode.nodeName); // "#text"
console.log("Node Type:", textNode.nodeType); // 3 (Text Node)