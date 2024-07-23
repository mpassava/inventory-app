const express = require("express");
const router = express.Router();
const DBManager = require("../db.js");

const DB = DBManager.getInstance();

router.get("/", (_, res) => {
  DB.connect();

  DB.all("SELECT * FROM Products", [], (err, rows) => {
    if (err) {
      res.status(500).send("server error fetching data");
      return;
    }
    res.status(200).json(rows);
  });

  DB.close();
});

router.get('/headers', (_, res) => {
  DB.connect();

  DB.all("PRAGMA table_info(Products)", [], (err, rows) => {
    if (err) {
      res.status(500).send('server error fetching table data');
      return;
    }

    const headers = rows.map(row => row.name);
    res.status(200).json(headers);
  })
})

module.exports = router;
