const { Router } = require("express");
const router = Router();
// const Product = require("../model/Product");
const { Create, List } = require("../Controllers/Product");

// Assuming router is already defined
router.post("/create", Create);
router.get("/list", List);

// Create a new product
router.post("/", async (req, res) => {
  try {
    let product = new Product({
      key: value,
    });
    product = await product.save();
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get product By ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
