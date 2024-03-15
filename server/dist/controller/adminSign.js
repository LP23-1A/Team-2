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
exports.LoginAuth = exports.Login = exports.Admin = void 0;
const adminSign_1 = require("../model/adminSign");
const Admin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield adminSign_1.AdminModel.create(req.body);
        return res.status(201).send({ success: true });
    }
    catch (error) {
        console.log(error, "err");
        return res.status(400).send({ error });
    }
});
exports.Admin = Admin;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield adminSign_1.AdminModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.Login = Login;
const LoginAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield adminSign_1.AdminModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.LoginAuth = LoginAuth;
