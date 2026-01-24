const express = require('express');
const app = express();
const port = 3001; //0 - 65535

app.get('/:category', (req, res) => {
    console.log("Request URL:", req.url);
    console.log("Request Params: ", req.params);
    console.log("Request Query: ", req.query);
    console.log("Request Headers: ", req.headers);
    console.log("Request Method: ", req.method);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening on port no: ${port}`);

});