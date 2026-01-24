const express = require('express');

const tasksRouter = express.Router();

tasksRouter.get('/tasks', (req, res) => res.send('Get all tasks'));
tasksRouter.post('/tasks', (req, res) => res.send('Create a new task'));
// tasksRouter.put('/tasks/:id', (req, res) => res.send(`Update task with id ${req.params.id}`));
// tasksRouter.delete('/tasks/:id', (req, res) => res.send(`Delete task with id ${req.params.id}`));

module.exports = tasksRouter;