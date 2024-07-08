const express = require("express");
const app = express();
const port = 3030;
const cors = require('cors')

const products = require("./routes/products.js");

app.use(express.json());
app.use(cors());
app.use('/products', products);

app.get("/", (_, res) => {
  res.send("App is working");
});

app.listen(port, (err) => {
  if (err) {
    console.error("error starting server: ", err.message);
    return;
  }
  console.log(`server listening on port ${port}`);
});
