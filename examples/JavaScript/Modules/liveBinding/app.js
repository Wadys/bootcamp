import {counter, incrementCounter } from "./src/counter.js";
document.getElementById("updateCounter").addEventListener("click", () => {
    incrementCounter();
    document.getElementById("counter").textContent = counter;
});