const express = require("express");
const app = express();
const port = 3030;
const sqlite3 = require("sqlite3");
const DB = require("./db.js");

app.use(express.json());

app.get("/", (req, res) => {
  console.log(res);
  res.send("App is working");
});

app.listen(port, (err) => {
  if (err) {
    console.error("error starting server: ", err.message);
    return;
  }
  console.log(`server listening on port ${port}`);
});
