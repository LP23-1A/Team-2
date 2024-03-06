import express from "express";
import { createProduct, deleteProduct, getAllProduct, updateProduct } from "./product.controller";

export const Product = express.Router()
Product.route("/getAllProduct").get(getAllProduct)
Product.route("/createProduct").post(createProduct);
Product.route("/:id").delete(deleteProduct).put(updateProduct);
