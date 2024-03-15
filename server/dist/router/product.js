"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const express_1 = __importDefault(require("express"));
const product_1 = require("../controller/product");
exports.product = express_1.default.Router();
exports.product.route("/getAllProduct").get(product_1.getAllProduct);
exports.product.route("/createProduct").post(product_1.createProduct);
exports.product.route("/:id").delete(product_1.deleteProduct).put(product_1.updateProduct);
