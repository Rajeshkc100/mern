let mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: String,
    deadline: Date,
    points: Number,
    createDate:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Todo", TodoSchema);