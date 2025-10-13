function updateImageAttributes() {
    let imageElement = document.getElementById("exampleImage"); // Get the image element
    let imageSrc = imageElement.getAttribute("src"); // Get the src attribute
    let imageAlt = imageElement.getAttribute("alt"); // Get the alt attribute

    console.log(imageSrc); // Logs the src attribute
    console.log(imageAlt); // Logs the alt attribute

    imageElement.setAttribute("src", "https://via.placeholder.com/300"); // Update the src attribute
    imageElement.setAttribute("alt", "Updated Placeholder Image"); // Update the alt attribute
};