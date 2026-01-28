const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const responseFormatter = require('./middleware/responseFormatter.js');
const tasksRouter = require('./tasks/tasks.router');
const authRouter = require('./auth/auth.router.js');
const usersRouter = require('./users/users.router.js');
const {StatusCodes} = require('http-status-codes');
const mongoose = require('mongoose');

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
app.use('/', tasksRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).json(null);
});

async function bootstrap() {
    try {
        await mongoose.connect('mongodb+srv://wadys:tmZLOasoHZfZ78Nw@nodejs.3tq43wb.mongodb.net/',
            {dbName: 'fullstackTasks'
        });
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`App listening on port: ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

bootstrap();