// External Dependancies
const boom = require('boom');

// Get Data Models
const Todo = require('./model');

// Get all todos
exports.getTodos = async (req, reply) => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Get single todo by ID
exports.getSingleTodo = async (req, reply) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    return todo;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Add a new todo
exports.addTodo = async (req, reply) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    console.log(todo);
    return todo.id;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Update an existing todo
exports.updateTodo = async (req, reply) => {
  try {
    const id = req.params.id;
    const todo = req.body;
    const { ...updateData } = todo;
    const update = await Todo.findByIdAndUpdate(id, updateData, { new: true });
    return update.id;
  } catch (err) {
    throw boom.boomify(err);
  }
}

// Delete a todo
exports.deleteTodo = async (req, reply) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByIdAndRemove(id);
    return todo.id;
  } catch (err) {
    throw boom.boomify(err);
  }
}
