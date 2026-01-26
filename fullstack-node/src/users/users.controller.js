const {StatusCodes, ReasonPhrases} = require("http-status-codes");

function handleGetUsers(req, res) {
    let response =[
        {
            user: "USER1",
            date: "2024-01-01T12:00:00Z",
            userName: "John Doe",
            email: "johndoe@testmail.com",
            status: "active",
            role: "admin"
        },
        {
            user: "USER3",
            date: "2024-01-01T12:00:00Z",
            userName: "John Smit",
            email: "johnsmith@testmail.com",
            status: "inactive",
            role: "editor"
        },
    ];
    res.status(StatusCodes.OK).json(response);
}

function handleCreateUsers(req, res) {
    res.send("Create User");
}

module.exports = {
    handleGetUsers,
    handleCreateUsers
};