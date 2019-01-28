const mongoose = require('mongoose');

const todoShemas = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: ''
    },
    isComplete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('todo', todoShemas);