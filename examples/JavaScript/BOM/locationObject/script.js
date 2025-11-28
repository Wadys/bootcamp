document.getElementById("showHref").addEventListener("click", function() {
    console.log("Current URL: " + window.location.href);
    alert("Current URL: " + "\n" + window.location.href);
});
document.getElementById("showHostname").addEventListener("click", function() {
    console.log("Current Hostname: " + window.location.hostname);
    alert("Current Hostname: " + "\n" + window.location.hostname);
});
document.getElementById("showPathname").addEventListener("click", function() {
    console.log("Current Pathname: " + window.location.pathname);
    alert("Current Pathname: " + "\n" + window.location.pathname);
});
document.getElementById("showProtocol").addEventListener("click", function() {
    console.log("Current Protocol: " + window.location.protocol);
    alert("Current Protocol: " + "\n" + window.location.protocol);
}); 
document.getElementById("goToSite").addEventListener("click", function() {
    window.location.href = "https://www.example.com";
    console.log(window.location);
});