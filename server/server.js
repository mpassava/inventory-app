const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const port = 3030;

app.use(express.json());

const db = new sqlite3.Database("inventorydb.sqlite3", (err) => {
  if (err) {
    console.error(err.message, "error connecting to database");
    return;
  }
  console.log("database connection established");
});

app.get("/", (req, res) => {
  res.send("App is working");
});

app.get("/query", (req, res) => {
  if (!req.body.query) {
    res.status(400).send("Query missing or invalid");
    return;
  }
  const { query } = req.body;
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
      return;
    }
    res.json(rows);
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error("error starting server: ", err.message);
    return;
  }
  console.log(`server listening on port ${port}`);
});

process.on("SIGINT", () => {
  db.close((err) => {
    if (err) {
      console.error(err.message, "error closing database");
      return;
    }
    console.log("database connection closed");
    process.exit(0);
  });
});
