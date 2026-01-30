const {body} = require('express-validator');
const { create } = require('../task.schema');
createTaskValidator = [
    body("title", "The title can not be empty").notEmpty(),
    body("title", "The title must be a string").isString(), 
    body("title").isLength({max: 100}),
    body("title").trim(),
    body("dueDate", "The dueDate must be a ISO8601string")
        .notEmpty()
        .isISO8601(),
    body("description","The description cannot be empty and needs to be a string")
        .isString()
        .notEmpty()
        .trim(),
    body("description", "The description must be less than 500 characters")
        .isLength({max: 500}),
    body('priority').isIn(['low', 'normal', 'high']),
    body('status').isIn(['todo', 'inProgress', 'completed']),
];
module.exports = createTaskValidator;
