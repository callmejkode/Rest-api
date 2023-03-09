const express = require("express");
const app = express();
const ProductRoute = require("./Routes/Product");

app.use("/products", ProductRoute);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`app listening on 5000...`);
  }
});
