const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:Codes2108@cluster0.bfysxu8.mongodb.net/todos');


const todoSchema = mongoose.Schema({

    title: String,
    description: String,
    completed: {

        type: Boolean,
        default: false
        
    }

});

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo };