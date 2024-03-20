const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("App is working");
});

app.listen(port, (err) => {
  if (err) {
    console.error("error starting server: ", err.message);
    return;
  }
  console.log(`server listening on port ${port}`);
});
