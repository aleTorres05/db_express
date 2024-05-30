const express = require("express");

const kodersRouter = require("./koders.router");

const server = express();

server.use(express.json());

// montar el router en el server
server.use("/koders", kodersRouter);

server.get("/", (request, response) => {
  response.json({
    message: "Kodemia APIv1",
  });
});

module.exports = server;
