document.getElementById("exampleButton")
.addEventListener("click", function(event) {
    console.log("Button clicked!");// Accessing properties of the event object
    console.log("Event Type:", event.type);// "click"
    console.log("Event Target:", event.target);
    // The element that triggered the event
    console.log("Event Target ID:", event.target.id);
    // The ID of the element that triggered the event
    console.log("Event Target:", event.currentTarget);
    // The element the event listener is attached to
    console.log("Event Target Tag Name:", event.currentTarget.tagName);
    // The tag name of the element the event listener is attached to
    console.log("Event Timestamp:", event.timeStamp);
    // The time when the event was created
    console.log("Mouse Position - X:", event.clientX, "Y:", event.clientY);
    // Mouse position relative to the viewport
});