const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true
})

// Must be normal function to use this
taskSchema.pre('save', async function (next) {
    const task = this


    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
