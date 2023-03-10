const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose
  .connect("mongodb+srv://jkode:Ride0rdie@restapi.xojthif.mongodb.net/")
  .then(() => {
    console.log("MongoDB connected....");
  });

const ProductRoute = require("./Routes/ProductRoute");
app.use("/products", ProductRoute);

app.get("/", (req, res) => {
  res.send("homepage");
});

//next parameters is now a global variable
// app.use((req, res, next) => {
//   const err = new Error("page not found");
//   err.status = 404;
//   next(err);
// });

// Error handler
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     error: err.status || 500,
//     message: err.message,
//   });
// });

// app.get("*", (req, res) => {
//   res.send("404 Page");
//   res.status(404);
// });

app.all("/test", (req, res) => {
  // console.log(req.query);
  // console.log(req.query.name);
  // res.send(req.query);
  // console.log(req.params);
  // res.send(req.params);
  res.send(req.body);
  console.log(req.body);
});

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`app listening on 5000...`);
  }
});
