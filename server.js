const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("views"));

app.use("/src", express.static(__dirname + "/src"));

const port = 3000;
const hostname = "127.0.0.1";

app.get("/", (req, res) => {
  res.send("./views/index.html");
  console.log("res :>> ", res);
});

app.listen(port, () => {
  console.log("listen");
});
