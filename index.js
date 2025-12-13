// index.js

import { create, router as createRouter, defaults } from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM equivalent of __dirname (needed for file paths)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = create();
const router = createRouter(path.join(__dirname, 'db.json')); // Robust path to db.json
const middlewares = defaults();

// Get the port from Render's environment variable (or use 3000 locally)
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server running as ES Module on port ${port}`);
});