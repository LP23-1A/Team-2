import express from "express";
import { createProduct, deleteProduct, updateProduct } from "./product.controller";

export const Product = express.Router()
Product.route("/createProduct").post(createProduct);
Product.route("/:id").delete(deleteProduct).put(updateProduct);
