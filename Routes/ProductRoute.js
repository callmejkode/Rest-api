const express = require("express");
const router = express.Router();

const Product = require("../Models/Product");

//Get a list of products
router.get("/", async (req, res, next) => {
  try {
    // const result = await Product.find({}, { __v: 0 });
    // const result = await Product.find({}, { name: 1, _id: 0, price: 1 });
    const result = await Product.find({ price: 40000 }, { __v: 0 });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
  // res.send("get all the products");
});

// Add a new product
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

/// Products modified
//Get a single product
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    // const product = await Product.findOne({ __id: id });
    res.send(product);
  } catch (error) {
    console.log(error.message);
  }
});

// Updating an exsisting product
router.patch("/:id", async (req, res, next) => {
  const id = req.params.id;
  const update = req.body;
  try {
    const result = await Product.findByIdAndUpdate(id, update);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }

  console.log("updating a product");
});

// Delete a product
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }

  console.log("Product deleted");
});
module.exports = router;
