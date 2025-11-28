document.getElementById("btnOpen").addEventListener("click", function() {
    window.open("https://google.com", "_blank");
    console.log(window.document);
    console.log(window);
    console.log("test");
});

document.getElementById("btnShowProps").addEventListener("click", function() {
    alert(`
        Window Width: ${window.screen.width}px
        Window Height: ${window.screen.height}px
        Screen Available Width: ${window.screen.availWidth}px
        Screen Available Height: ${window.screen.availHeight}px
        Color Depth: ${window.screen.colorDepth}bits
        Pixel Depth: ${window.screen.pixelDepth}bits
        `);
});