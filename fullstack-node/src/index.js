const express = require('express');

const tasksRouter = require('./tasks/tasks.router');

const app = express();
const port = 3001;

app.use('/', tasksRouter);

app.listen(port, () => {
    console.log(`App listening on port no: ${port}`);

});