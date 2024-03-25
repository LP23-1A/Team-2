import express from "express";
import { Admin, Login, LoginAuth } from "../controller/user";

const user = express.Router();

user.post("/adminsign", Admin);
user.post("/adminlogin", Login);
user.post("/adminauth", LoginAuth);

export { user };