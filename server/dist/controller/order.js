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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = exports.getIncome = exports.updateOrderById = exports.getAllOrders = exports.newOrder = void 0;
const order_1 = require("../model/order");
const newOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield order_1.OrderModel.create(req.body);
        return res.status(201).send({ success: true });
    }
    catch (error) {
        return res.status(400).send({ error });
    }
});
exports.newOrder = newOrder;
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = yield order_1.OrderModel.find();
        return res.status(201).send({ success: true, orderData });
        // res.status(201).json(orderData);
    }
    catch (error) {
        return res.status(400).send({ error });
    }
});
exports.getAllOrders = getAllOrders;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = yield order_1.OrderModel.find().populate("userid");
        return res.status(201).send({ success: true, orderData });
        console.log(orderData);
        // res.status(201).json(orderData);
    }
    catch (error) {
        return res.status(400).send({ error });
    }
});
exports.getOrders = getOrders;
const getIncome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = yield order_1.OrderModel.find().populate("userid");
        return res.status(201).send({ success: true, incomeData: orderData });
        // res.status(201).json(orderData);
    }
    catch (error) {
        return res.status(400).send({ error });
    }
});
exports.getIncome = getIncome;
const updateOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.body;
    try {
        const updateData = yield order_1.OrderModel.findByIdAndUpdate(orderId, req.body, { new: true });
        // return res.status(201).send({ success: true });
        res.status(201).json(updateData);
    }
    catch (error) {
        return res.status(400).send({ error });
    }
});
exports.updateOrderById = updateOrderById;
