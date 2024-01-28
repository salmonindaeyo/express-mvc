const Product = require("../Models/Product");

const Create = async (req, res) => {
  const product = await Product(req.body).save();
  res.send(product);
};
const List = async (req, res) => {
  const product = await Product.find({}).exec();

  res.send(product);
};

module.exports = {
  Create,
  List,
};
