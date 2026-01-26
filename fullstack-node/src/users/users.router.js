const express = require('express');
const userController = require('./users.controller.js');
const userRouter = express.Router();
userRouter.get("/search",userController.handleGetUsers);
userRouter.post("/create", userController.handleCreateUsers);

module.exports = userRouter;