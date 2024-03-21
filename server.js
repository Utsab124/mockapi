const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port =process.env.port||3000;
const checkToken = (req, res, next) => {
  if (req.header.token !== "bearer token123") {
    res.send(400, "Invalid acess token");
  } else {
    next();
  }
};
server.use(middleware);
server.use(router);
server.use(checkToken);
server.listen(port, () => {
  console.log("Server started");
});
