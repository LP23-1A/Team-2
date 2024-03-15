"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProduct = exports.updateProduct = exports.deleteProduct = exports.createProduct = void 0;
const multer_1 = __importDefault(require("multer"));
const product_1 = require("../model/product");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productName: productName, description: description, price: price, qty: qty, categoryID: categoryID, images: images } = req.body;
        const result = yield product_1.productSchema.create({ productName: productName, description: description, price: price, qty: qty, categoryID: categoryID, images: images });
        console.log(result, "");
        console.log('req.body', req.body);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createProduct = createProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productID = req.params.id;
        const deleteOneProduct = yield product_1.productSchema.findByIdAndDelete(productID);
        res.status(201).send({ success: true, deleteOneProduct });
        console.log("product deleted");
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteProduct = deleteProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productID = req.params.id;
        const updateOneProduct = yield product_1.productSchema.findByIdAndUpdate(productID, req.body, { new: true });
        res.status(201).send({ success: true, updateOneProduct });
        console.log("updated");
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.updateProduct = updateProduct;
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getProduct = yield product_1.productSchema.find();
        res.status(201).send(getProduct);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getAllProduct = getAllProduct;
