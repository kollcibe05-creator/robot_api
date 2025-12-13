// index.js

const { create, router: createRouter, defaults } = require('json-server');
const server = create();
const router = createRouter('db.json'); // Path to your data file
const middlewares = defaults();

// Get the port from Render's environment variable (or use 3000 locally)
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server v1.0.0+ is running on port ${port}`);
});