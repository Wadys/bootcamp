const inputField = document.getElementById("inputField");
inputField.addEventListener("keydown",function(event){
    console.log(`Key Down:, ${event.key} Code: ${event.code} `);
});
// inputField.addEventListener("keypress",function(event){
//     console.log(`Key pressed:, ${event.key} Code: ${event.code} `)
// });// This is deprecated, does not register
// // not register none functional keys
inputField.addEventListener("keydown",function(event){ //KeyUp works whan key is released
    console.log(`Key Down:, ${event.key} Code: ${event.code} `);
});