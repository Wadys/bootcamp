const task = require("../task.schema.js");
async function getTasksProvider(req, res) {
    return await task.find({});
}
module.exports = getTasksProvider;