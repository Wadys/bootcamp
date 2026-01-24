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
app.get("/users/:role/", (req, res) => {
    console.log("Request Method:", req.params);
    console.log("Request Method:", req.query);
    res.send('Hello World!');
});


//Tasks Request Example: http://localhost:3000/tasks/admin
app.get("/tasks/:users?/", (req, res) => {
    console.log("Request Method:", req.params);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening on port no: ${port}`);

});