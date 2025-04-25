
// This is a helper script to start the JSON server for the Community Plus app
console.log('Starting JSON server for Community Plus...');
console.log('To start the server manually, run:');
console.log('npx json-server --watch db.json --port 3000');

// Import the necessary modules
import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/health', (req, res) => {
  res.jsonp({ status: 'UP' });
});

// Use default router
server.use(router);

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log(`- http://localhost:${PORT}/reports (GET, POST)`);
  console.log(`- http://localhost:${PORT}/reports/:id (GET, PATCH, DELETE)`);
});
