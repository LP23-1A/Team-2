import express from "express";
import { Admin, Login, LoginCheck } from "../controller/user";

const user = express.Router();

user.post("/adminsign", Admin);
user.post("/adminlogin", Login);
user.post("/adminauth", LoginCheck);

export { user };