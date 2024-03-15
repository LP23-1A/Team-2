"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminStatus = void 0;
const express_1 = __importDefault(require("express"));
const dashboard_1 = require("../controller/dashboard");
const adminStatus = express_1.default.Router();
exports.adminStatus = adminStatus;
adminStatus.get("/status", dashboard_1.dashboard);
