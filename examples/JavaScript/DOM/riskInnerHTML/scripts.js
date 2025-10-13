let contentDiv = document.getElementById("content");
//safe usage of innerHTML
contentDiv.innerHTML = "<p>This is safe usage of a paragraph added, using innerHTML.</p>";
//unsafe usage of innerHTML with user input
let userInput = `<img src="invalid-image.jpg" onError='alert("Hacked")' />`; // Simulated user input
contentDiv.innerHTML += userInput; // Risky usage of innerHTML with user input