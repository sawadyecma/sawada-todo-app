const express = require("express");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

const mysql = require("mysql");

const env = process.env;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = env;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  insecureAuth: true,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tasks", (req, res) => {
  connection.query("SELECT * FROM tasks", (err, results) => {
    console.log({ err });
    console.table(results);
  });
  res.render("./tasks/index.ejs", {});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
