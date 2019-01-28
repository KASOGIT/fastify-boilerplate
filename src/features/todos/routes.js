// Import our Controllers
const controller = require("./controller");

// Import Swagger documentation and schemas
const schemas = require("./config/schemas");

const routes = [
  {
    method: "GET",
    url: "/api/todos",
    handler: controller.getTodos,
    schema: schemas.getTodosSchema
  },
  {
    method: "GET",
    url: "/api/todos/:id",
    handler: controller.getSingleTodo,
    schema: schemas.getSingleTodoSchema
  },
  {
    method: "POST",
    url: "/api/todos",
    handler: controller.addTodo,
    schema: schemas.addTodoSchema
  },
  {
    method: "PUT",
    url: "/api/todos/:id",
    handler: controller.updateTodo,
    schema: schemas.updateTodoSchema
  },
  {
    method: "DELETE",
    url: "/api/todos/:id",
    handler: controller.deleteTodo,
    schema: schemas.deleteTodoSchema
  }
];

module.exports = routes;
