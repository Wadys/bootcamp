const express = require('express');

const tasksRouter = express.Router();

// Define routes for tasks
// tasksRouter.get('/tasks', (req, res) => res.send('Get all tasks'));
//This endpoint uses the middleware to send info about the app
tasksRouter.get('/tasks', (req, res) => { 
    // Accessing the info added by middleware
    // console.log(req.info);
    // return res.send(req.info)
    return res.send('Hello World');
});

// New POST endpoint to create a task
// tasksRouter.post('/tasks', (req, res) => res.send('Create a new task'));
tasksRouter.post('/tasks', (req, res) => {
    console.log(req.body);
    console.log(typeof req.body);
    return res.send("Create a new task");
});

module.exports = tasksRouter;