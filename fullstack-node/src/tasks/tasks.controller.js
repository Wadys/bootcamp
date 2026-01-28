const {StatusCodes, ReasonPhrases} = require("http-status-codes");
const createTaskProvider = require("./providers/createTask.provider");

function handleGetTasks(req, res) {
    let response =[
        {
            title: "Tittle of the Task",
            date: "2024-01-01T12:00:00Z",
            description: "This is a sample task description.",
            priority: "normal",
            status: "todo"
        },
        {
            title: "Tittle of the Task 2",
            date: "2024-01-01T12:00:00Z",
            description: "This is a sample task description.",
            priority: "normal",
            status: "todo"
        },
    ];
    res.status(StatusCodes.OK).json(response);
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