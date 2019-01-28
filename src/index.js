require('dotenv').config();

const dev = process.env.NODE_ENV === 'development' ? true : false;

// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: dev ? true : false
});

// Require external modules
const mongoose = require('mongoose');

// Import Routes
const routes = require('./features').routes;

if (dev) {
  // Import Swagger Options
  const swagger = require('./config/swagger');
  // Register Swagger
  fastify.register(require('fastify-swagger'), swagger.options);
}

// Cors
fastify.register(require('fastify-cors'));

// Connect to DB
mongoose.connect('mongodb://localhost/fastify-todo', {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Loop over each route
routes.forEach((route) => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(1311);
    if (dev) {
      fastify.swagger();
    }
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
