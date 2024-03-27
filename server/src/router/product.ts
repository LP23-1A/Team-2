import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
  getBestProducts,
  getProductById
} from "../controller/product";

export const product = express.Router();

product.route("/").post(createProduct).get(getAllProduct);
product.route("/bestproducts").get(getBestProducts);
product.route("/:id").delete(deleteProduct).put(updateProduct).get(getProductById);
