import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controller/product";

export const product = express.Router();
product.route("/getAllProduct").get(getAllProduct);
product.route("/createProduct").post(createProduct);
product.route("/:id").delete(deleteProduct).put(updateProduct);
