"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("..//src/utils/database");
const adminSign_1 = require("./router/adminSign");
const cors_1 = __importDefault(require("cors"));
const product_1 = require("./router/product");
const order_1 = require("./router/order");
const dashboard_1 = require("./router/dashboard");
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
(0, database_1.connectDatabase)();
const start = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/admin", adminSign_1.AdminRouter);
    app.use("/product", product_1.product);
    app.use("/dashboard", dashboard_1.adminStatus);
    app.use('/order', order_1.order);
    app.get("/", (req, res) => {
        res.status(200).send({ success: true, msg: "Working" });
    });
    app.use("/order", order_1.order);
    // app.get("/", (req:Request, res:Response) => {
    //   res.status(200).send({ success: true, msg: "Working" });
    // });
    app.listen(PORT, () => {
        console.log("Server is running!!!", PORT);
    });
};
start();
