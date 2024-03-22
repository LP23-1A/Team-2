import express from "express";
import { Admin, Login, LoginCheck } from "../controller/adminSign";

const AdminRouter = express.Router();

AdminRouter.post("/adminsign", Admin);
AdminRouter.post("/adminlogin", Login);
AdminRouter.post("/checkrole", LoginCheck);

export { AdminRouter };
