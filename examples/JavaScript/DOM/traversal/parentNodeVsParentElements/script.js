let paragraph = document.getElementById("paragraph");
let parentNode = paragraph.parentNode;
console.log("Parent Node:", parentNode); // parentNode returns the parent element
let parentElement = paragraph.parentElement;
console.log("Parent Element:", parentElement); // Both return the same element for element nodes
let textNode = document.getElementById("textNodeExample").firstChild;
console.log("Text Node:", textNode); // This is a text node
let textNodeParentNode = textNode.parentNode;
console.log("Text Node Parent Node:", textNodeParentNode); // parentNode returns the parent element
let textNodeParentElement = textNode.parentElement;
console.log("Text Node Parent Element:", textNodeParentElement); // parentElement returns null for text nodes
let htmlElement = document.documentElement; // This is the <html> element
console.log("HTML Element:", htmlElement);
console.log("HTML Element Parent Node:", htmlElement.parentNode);
console.log("HTML Element Parent Element:", htmlElement.parentElement);

let divElement = document.getElementById("textNodeExample").parentNode;
let commentNode = divElement.previousSibling; // Accessing the comment node

console.log(Node.COMMENT_NODE); // 8
while (commentNode && commentNode.nodeType !== Node.COMMENT_NODE) {
    commentNode = commentNode.previousSibling;
}
console.log("Comment Node:", commentNode); // This is a comment node