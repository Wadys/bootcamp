window.addEventListener("load", function(){
    console.log("The page has fully loaded");
})
window.addEventListener("resize",function(){
    console.log(`Resize to Width: ${this.innerWidth}, Height: ${this.innerHeight}`);
}) 
window.addEventListener("scroll", function(){
    console.log(`You are Scrolling`);
})
window.addEventListener("beforeunload", function(){
    let confirmationMessage = `Are you sure you want to leave?`;
    event.preventDefault();
    event.returnValue = confirmationMessage;
})