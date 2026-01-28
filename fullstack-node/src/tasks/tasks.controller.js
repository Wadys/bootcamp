const {StatusCodes, ReasonPhrases} = require("http-status-codes");
const createTaskProvider = require("./providers/createTask.provider.js");
const getTasksProvider = require("./providers/getTasks.provider.js");

async function handleGetTasks(req, res) {
    const tasks = await getTasksProvider();
    res.status(StatusCodes.OK).json(tasks);
}

async function handlePostTasks(req, res) {
    const task = await createTaskProvider(req, res);
    res.status(StatusCodes.CREATED).json(task);
}

function handlePatchTasks(req, res) {
    res.send("PATCH task controller");
}

function handleDeleteTasks(req, res) {
    res.send("DELETE task controller");
}

module.exports = {
    handleGetTasks,
    handlePostTasks,
    handlePatchTasks,
    handleDeleteTasks
};