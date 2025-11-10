document.getElementById("exampleForm")
.addEventListener("submit", function(event){
    console.log("Form Submitted");
    event.preventDefault(); // Prevent actual form submission for demo
    console.log("Own js Code");
});

document.getElementById("textInput")
.addEventListener("input", function(){
    console.log("Text Input", this.value);
});

document.getElementById("emailInput")
.addEventListener("change", function(){
    console.log("Email Changed", this.value);
});

document.getElementById("passwordInput")
.addEventListener("focus", function(){
    console.log("Password focus", this.value);
});
document.getElementById("passwordInput")
.addEventListener("blur", function(){
    console.log("Password blur", this.value);
});

document.getElementById("checkboxInput")
.addEventListener("change", function(){
    console.log(this.checked ? "checked" : "unchecked");
});

document.getElementById("fileInput")
.addEventListener("change", function(){
    console.log(this.files);
    console.log(this.files[0]);
    console.log(this.files[0].name);
});