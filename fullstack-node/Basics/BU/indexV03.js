const express = require('express');
const app = express();
const port = 3001; //0 - 65535

//User Request Example: http://localhost:3000/users/
// app.get("/users/", (req, res) => {
//     console.log("Request Method:", req.method);
//     res.send('Hello World!');
// });

//User Request Example: http://localhost:3000/users/admin
// app.get("/users/:role", (req, res) => {
//     console.log("Request Method:", req.params);
//     res.send('Hello World!');
// });

//User Request Example: http://localhost:3000/users/admin/active
// app.get("/users/:role/:status", (req, res) => {
//     console.log("Request Method:", req.params);
//     res.send('Hello World!');
// });

//User Request Example: http://localhost:3000/users/admin/?order=asc&limit=10&page=1
// app.get("/users/:role/", (req, res) => {
//     console.log("Request Method:", req.params);
//     console.log("Request Method:", req.query);
//     res.send('Hello World!');
// });


//Tasks Request Example: http://localhost:3000/tasks/admin
// app.get("/tasks/:users?/", (req, res) => {
//     console.log("Request Method:", req.params);
//     res.send('Hello World!');
// });c

// Example: http://localhost:3000/some.text
// app.get("/some.text", (req, res) => {
//     console.log("Request URL:", req.url);
//     res.send('Hello World!');
// });

//Making one of the characters optional
// Example: http://localhost:3000/some.text
app.get("/posts?", (req, res) => {
    console.log("Request URL:", req.url);
    res.send('Hello World!');
});

//Making a string of characters optional
// Example: http://localhost:3000/some.text
// app.get("/tag*", (req, res) => {
//     console.log("Request URL:", req.url);
//     res.send('Hello World!');
// });

//Error Handling Example
// app.get("/error*", (req, res) => {
//     console.log("Request URL:", req.url);
//     res.send('Hello World!');
// });

//Using Regular Expressions in route paths
// Example: http://localhost:3000/butterfly   housefly   fly
app.get("/*fly$/", (req, res) => {
    console.log("Request URL:", req.url);
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`App listening on port no: ${port}`);

});