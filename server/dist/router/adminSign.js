"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const adminSign_1 = require("../controller/adminSign");
const AdminRouter = express_1.default.Router();
exports.AdminRouter = AdminRouter;
AdminRouter.post("/adminsign", adminSign_1.Admin);
AdminRouter.post("/adminlogin", adminSign_1.Login);
AdminRouter.post("/adminauth", adminSign_1.LoginAuth);
