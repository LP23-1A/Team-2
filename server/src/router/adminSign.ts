import express from "express";
import { AdminSign, Login, LoginCheck } from "../controller/admin";

const AdminRouter = express.Router();

AdminRouter.post("/adminsignup", AdminSign);
AdminRouter.post("/adminlogin", Login);
AdminRouter.post("/checkrole", LoginCheck);

export { AdminRouter };
