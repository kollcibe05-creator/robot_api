const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Your db.json file
const middlewares = jsonServer.defaults();

// Set up port, default to 3000 if not provided by environment
const port = process.env.PORT || 3000; 

server.use(cors()); // Use CORS middleware
server.use(middlewares);
server.use(router); // Use the JSON Server router

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});