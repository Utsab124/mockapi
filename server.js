const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 4000;
require("dotenv").config();

const checkToken = (req, res, next) => {
  if (req.headers.token !== "bearer token123") {
    res.send(400, "Invalid acess token");
  } else {
    next();
  }
};
server.use(middleware);
server.use(checkToken);
server.use(router);

server.listen(port, () => {
  console.log("Server started");
});
