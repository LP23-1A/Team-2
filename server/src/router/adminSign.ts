import express from "express";
import { Admin, Login } from "../controller/adminSign";

const AdminRouter = express.Router();

AdminRouter.post("/adminsign", Admin);
AdminRouter.post("/adminlogin", Login);

export { AdminRouter };
