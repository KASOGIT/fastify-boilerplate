exports.addTodoSchema = {
  description: 'Create a new todo',
  tags: ['todos'],
  summary: 'Creates new todo with given values',
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      desc: { type: 'string' },
      isComplete: { type: 'boolean' }
    },
    required: ['title']
  },
  response: {
    200: {
      description: 'Successfuly added new todo',
      type: 'object',
      properties: {
        _id: { type: 'string' }
      }
    }
  }
}

exports.getTodosSchema = {
  description: 'Get all todos',
  tags: ['todos'],
  summary: 'Retrieve all todos in database',
  response: {
    200: {
      description: 'Successfuly retrieved all todos',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          _id: { type: 'string' },
          title: { type: 'string' },
          desc: { type: 'string' },
          isComplete: { type: 'boolean' }
        }
      }
    }
  }
}

exports.getSingleTodoSchema = {
  description: 'Get a todo',
  tags: ['todos'],
  summary: 'Retrieve a single todo in db',
  params: {
    type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Todo id'
        }
      },
      required: ['id']
  },
  response: {
    200: {
      description: 'Successfuly fecth one todo',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        desc: { type: 'string' },
        isComplete: { type: 'boolean' }
      }
    }
  }
}

exports.updateTodoSchema = {
  description: 'Update a todo',
  tags: ['todos'],
  summary: 'Update a single todo in db',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Todo id'
      }
    },
    required: ['id']
  },
  body: {
    type: 'object',
    properties: {
      isComplete: {
        type: 'boolean'
      }
    },
    required: ['isComplete']
  },
  response: {
    200: {
      description: 'Succesfuly updated todo',
      type: 'object',
      properties: {
        _id: {
          type: 'string'
        }
      }
    }
  }
}

exports.deleteTodoSchema = {
  description: 'Delete a todo',
  tags: ['todos'],
  summary: 'Delete a single todo in db',
  params: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      }
    },
    required: ['id']
  },
  response: {
    200: {
      description: 'Succesfuly deleted todo',
      type: 'object',
      properties: {
        id: {
          type: 'string'
        }
      }
    }
  }
}