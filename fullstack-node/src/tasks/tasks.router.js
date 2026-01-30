const express = require('express');
const {body, validationResult} = require("express-validator")
const tasksController = require('./tasks.controller');
const tasksRouter = express.Router();
const {StatusCodes, ReasonPhrases} = require("http-status-codes");
const createtaskValidators = require('./validators/creatTask.validator');

tasksRouter.get('/tasks', tasksController.handleGetTasks);

tasksRouter.post('/tasks', createtaskValidators,(req, res) => {
        const result = validationResult(req);
        if (result.isEmpty()){
            return tasksController.handlePostTasks(req, res);
        } else {
            res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }
    }
);

tasksRouter.patch('/tasks', tasksController.handlePatchTasks);

tasksRouter.delete('/tasks', tasksController.handleDeleteTasks);

module.exports = tasksRouter;