import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controller/product";

export const product = express.Router();

product.route("/").post(createProduct).get(getAllProduct);
product.route("/:id").delete(deleteProduct).put(updateProduct);
