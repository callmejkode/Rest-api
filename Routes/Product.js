const express = require("express");
const router = express.Router();

//Get a list of products
router.get("/", (req, res, next) => {
  res.send("get all the products");
});

// Add a new product
router.post("/", (req, res, next) => {
  res.send("product created");
});

/// Products modified

//Get a single product
router.get("/id", (req, res, next) => {
  res.send("Get a single product");
});

// Updating an exsisting product
router.patch("/id", (req, res, next) => {
  res.send("updating a product");
});

// Delete a product
router.delete("/id", (req, res, next) => {
  res.send("Product deleted");
});
module.exports = router;
