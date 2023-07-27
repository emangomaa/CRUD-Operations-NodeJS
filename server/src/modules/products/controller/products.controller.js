import productSchema from "../../../../database/models/product.model.js";

// Get All Products
const getAllProducts = async (req, res) => {
  const products = await productSchema.findAll();

  products[0]
    ? res.json({ message: "success", data: products })
    : res.json({ message: "faild", data: products });
};

// Add Product
const addProduct = async (req, res) => {
  let { name, description, price } = req.body;
  const product = await productSchema.create({
    name,
    description,
    price,
  });

  product
    ? res.json({ message: "success", data: product })
    : res.json({ message: "faild", data: product });
};

// Delete Product
const deleteProduct = async (req, res) => {
  let { id } = req.body;
  let product = await productSchema.destroy({ where: { id } });
  product
    ? res.json({ message: "success", data: product })
    : res.json({ message: "faild" });
};

// Update Product
const updateProduct = async (req, res) => {
  let { id, name } = req.body;
  let product = await productSchema.update({ name }, { where: { id } });
  product[0]
    ? res.json({ message: "success" })
    : res.json({ message: "faild" });
};

// get single Product
const getSingleProduct = async (req, res) => {
  let { id } = req.params;
  let product = await productSchema.findOne({ where: { id } });
  product
    ? res.json({ message: "success", data: product })
    : res.json({ message: "faild", data: product });
};

export {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
};
