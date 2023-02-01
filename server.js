const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./data/index.js')());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(jsonServer.rewriter(require("./data/routes.json")));
server.use(router);

server.listen(port);