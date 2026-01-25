const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const responseFormatter = require('./middleware/responseFormatter.js');
const tasksRouter = require('./tasks/tasks.router');
const {StatusCodes} = require('http-status-codes');
const authRouter = require('./auth/auth.router.js');


const app = express();
const port = 3001;

app.use(express.json());

//This is how to enable CORS for specific origin
// const corsOptions  = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 
// };

//app.use(cors(corsOptions)); 
app.use(cors()); //This is to enable CORS for all routes is a security risk in production

var accessLogStream = fs.createWriteStream(
    path.join(__dirname, "..","access.log"), 
    {
        flags: 'a',
    } 
);

// Middleware to parse JSON bodies
// const middleWare = function (req, res, next) {
//     req.info = { appname: 'Task Manager', author: 'Wady' };
//     next();
// }
// app.use(middleWare);
app.use(morgan('combined', { stream: accessLogStream}));
app.use(responseFormatter);

/*define routes*/
app.use('/', authRouter);
app.use('/', tasksRouter);

app.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).json(null);
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);

});