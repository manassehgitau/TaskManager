const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    text: {type: String, required: true },
    completed: { type: Boolean, default: false },
});

const taskSchema = new mongoose.Schema({
    tittle: { type: String, required: true },
    description: { type: String },
    priority: {type: String, enum: ['Low', 'Medium', 'High'], default: 'medium'},
    status: {type:String, enum: ['pending', 'In Progress', 'Completed'], default: 'Pending'},
    dueDate: {type: Date, required: true},
    assignedTo : [{type: mongoose.Schema.Types.ObjectId, ref:'user'}],
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    todoChecklist: [todoSchema],
    progress: {type: Number, default: 0}
},
{ timestamps: true }

);

module.exports = mongoose.model('Task', taskSchema);
