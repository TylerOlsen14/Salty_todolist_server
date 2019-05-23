const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema({
  responsible: {
    type: String
  },
  task: {
    type: String
  },
  dueDate: {
    type: Number
  },
  done: {
    type: Boolean
  }
},
{collection: 'ToDoList'}
)

const todoItem = mongoose.model('todo', TodoSchema);

module.exports = todoItem