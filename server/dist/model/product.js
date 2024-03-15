"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productMongoose = new mongoose_1.default.Schema({
    productName: String,
    categoryID: {
        type: String,
    },
    price: Number,
    qty: Number,
    thumbnails: String,
    images: String,
    coupon: String,
    salePercent: String,
    description: String,
    viewsCount: Number,
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
});
const productSchema = mongoose_1.default.model('product', productMongoose);
exports.productSchema = productSchema;
