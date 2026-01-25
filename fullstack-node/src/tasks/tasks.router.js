const express = require('express');
const tasksController = require('./tasks.controller');
const tasksRouter = express.Router();

tasksRouter.get('/tasks', tasksController.handleGetTasks);

tasksRouter.post('/tasks', tasksController.handlePostTask);

tasksRouter.patch('/tasks', tasksController.handlePatchTask);

tasksRouter.delete('/tasks', tasksController.handleDeleteTask);


module.exports = tasksRouter;