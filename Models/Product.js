const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
