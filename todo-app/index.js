const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tasks", (req, res) => {
  res.render("./tasks/index.ejs", {});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
