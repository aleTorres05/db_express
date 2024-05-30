const server = require("./server");

const port = 8080;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
