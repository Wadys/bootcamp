function handleInlineClick() {
    alert("Inline event handler triggered!");
}// Assigning an event handler using the 'onclick' property
document.getElementById("onEventButton").onclick = function() {
    alert("On Event handler assigned via 'onclick' property triggered!");
}// Using addEventListener to attach multiple event handlers
document.getElementById("onEventButton").onclick = function() {
    console.log("Second On Event handler!"); // This will overwrite the 
    // previous handler
}
document.getElementById("addEventListenerButton").addEventListener("click", function() {
    alert("First addEventListener handler triggered!");
});
document.getElementById("addEventListenerButton").addEventListener("click", function() {
    console.log("Second with addEventListener!");
});