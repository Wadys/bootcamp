document
    .getElementById("exampleButton")
    .addEventListener("click", function(event){
        console.log("this refers to: ", this); //
        console.log(this.id);
        console.log(this.textContent);
        console.log(this.className);
        console.log(this.classList);
    });