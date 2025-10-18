const eventArea = document.getElementById("eventArea");

eventArea.addEventListener("mouseover",function(){
    console.log("Mouse Over the area");
    this.style.backgroundColor = "lightblue";
});
eventArea.addEventListener("mouseout",function(){
    console.log("Mouse Out of the area");
    this.style.backgroundColor = "#f0f0f0";
});
eventArea.addEventListener("mousedown",function(){
    console.log("Mouse button down");
    this.style.backgroundColor = "lightgreen";
});
eventArea.addEventListener("mouseup",function(){
    console.log("Mouse button Up");
    this.style.backgroundColor = "lightblue";
});