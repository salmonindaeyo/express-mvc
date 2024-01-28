const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    detail: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
