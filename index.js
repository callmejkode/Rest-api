const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jkode:Ride0rdie@restapi.xojthif.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB connected....");
  });

const ProductRoute = require("./Routes/Product");
app.use("/products", ProductRoute);
//next parameters is now a global variable
app.use((req, res, next) => {
  const err = new Error("page not found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: err.status || 500,
    message: err.message,
  });
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`app listening on 5000...`);
  }
});
