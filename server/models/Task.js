import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    status: {
        type: String,
        enum: ["Pending", "InProgress", "Completed", "OverDue"],
        default: "Pending"
    },
    deadline: { type: Date },
    priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        default: "Medium"
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },





}, { timestamps: true })
const Task = mongoose.model("Task", taskSchema)




export default Task