const express = require("express");
const app = express();
const port = 3030;
const DBManager = require("./db.js");
const DB = DBManager.getInstance();

app.use(express.json());

app.get("/", (_, res) => {
  DB.connect();
  res.send("App is working");
});

app.listen(port, (err) => {
  if (err) {
    console.error("error starting server: ", err.message);
    return;
  }
  console.log(`server listening on port ${port}`);
});
