"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const express_1 = __importDefault(require("express"));
const order_1 = require("../controller/order");
const order = express_1.default.Router();
exports.order = order;
order.route('/').post(order_1.newOrder).get(order_1.getAllOrders);
order.route('/income').get(order_1.getIncome);
order.route('/getorder').get(order_1.getOrders);
order.route('/:id').put(order_1.updateOrderById);
