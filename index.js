const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello welcome to AWS");
});
app.listen(80, () => console.log("Listining on Port 3000"));
