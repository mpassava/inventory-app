const express = require("express");
const router = express.Router();
const DBManager = require("../db.js");
const DB = DBManager.getInstance();

router.get("/", async (_, res) => {
  DB.connect();

  DB.all("SELECT * FROM Products", {}, (err, rows) => {
    if (err) {
      res.status(500).send("server error fetching data");
    }
    res.status(200).json(rows);
  });

  DB.close();
});

module.exports = router;
