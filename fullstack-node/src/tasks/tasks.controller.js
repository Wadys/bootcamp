function handleGetTasks(req, res) {
    res.send('GET tasks controller');
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