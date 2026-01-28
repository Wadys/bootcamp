const {Schema, model} = require('mongoose');
const taskSchema = new Schema(
    {
        title: {
            type: String,
            required:[true, 'Task title is required'],
            trim: true,
            maxlenght: [100, 'Task title should not be more than 100 characters']
        },
        description: {
            type: String,
            required:[true, 'Task description is required'],
            trim: true,
            maxlenght: [500, 'Task description should not be more than 500 characters'],
            },
        status: {
                type: String,
                required: [true, 'Task status is required'],
                enum: ['todo', 'inProgress', 'completed'],
                default: 'todo'
            },
        priority: {
                type: String,
                required: [true, 'Task priority is required'],
                enum: ['low', 'normal', 'high'],
                default: 'normal'
            },
        dueDate: {
                type: Date,
                required: [true, 'Task due date is required'],
        },
        createdAt:{
                type: Date,
                default: Date.now,
            }
    },
    {timestamps: true, versionKey: false}
);

const Task = model('Task', taskSchema);

module.exports = Task;