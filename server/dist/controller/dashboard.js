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
exports.dashboard = void 0;
const adminSign_1 = require("../model/adminSign");
const order_1 = require("../model/order");
const product_1 = require("../model/product");
const dashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userCount = yield adminSign_1.AdminModel.find().countDocuments();
        const orderCount = yield order_1.OrderModel.find().countDocuments();
        const incomeData = yield order_1.OrderModel.aggregate([
            {
                $group: {
                    _id: null,
                    amountPaid: {
                        $sum: "$amountPaid",
                    },
                },
            },
        ]);
        const productInfo = yield product_1.productSchema.find();
        return res.status(201).send({
            success: true,
            data: { userCount, orderCount, incomeData, productInfo },
        });
    }
    catch (error) {
        return res.status(400).send({ error });
    }
});
exports.dashboard = dashboard;
