const http = require("http");
const fs = require("fs");

const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log("__dirname :>> ", __dirname);
  res.end(fs.readFileSync(__dirname + "/index.html"));
});

server.listen(port, () => {
  console.log("Server is Running..");
});
