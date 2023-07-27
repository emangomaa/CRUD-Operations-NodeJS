import express from "express";

const router = express.Router();
import {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
} from "./controller/products.controller.js";
router.get("/", getAllProducts);
router.post("/", addProduct);

router.delete("/", deleteProduct);
router.put("/", updateProduct);
router.get("/:id", getSingleProduct);
// router.get("/?")
export default router;
