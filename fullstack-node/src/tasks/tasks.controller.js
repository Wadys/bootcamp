const {StatusCodes, ReasonPhrases} = require("http-status-codes");

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

function handlePostTask(req, res) {
    res.send("POST task controller");
}

function handlePatchTask(req, res) {
    res.send("PATCH task controller");
}

function handleDeleteTask(req, res) {
    res.send("DELETE task controller");
}

module.exports = {
    handleGetTasks,
    handlePostTask,
    handlePatchTask,
    handleDeleteTask
};