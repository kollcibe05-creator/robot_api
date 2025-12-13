// index.js

// 🚨 CRITICAL CHANGE: Importing from 'json-server' is failing. 
// Let's try importing the necessary components directly from the package's source.
// The necessary components (create, router, defaults) often come from the main export.

// Revert to the simplest possible import (which often works once the module type is correct)
import jsonServer from 'json-server';
import path from 'path'; 
import { fileURLToPath } from 'url';

// ESM equivalent of __dirname (needed for file paths)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The new server uses default exports, so we access components differently
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); 
const middlewares = jsonServer.defaults();

// Get the port from Render's environment variable (or use 3000 locally)
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is LIVE on port ${port}`); // Success message!
});