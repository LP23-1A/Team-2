import express from "express";
import { Admin, Login, LoginAuth } from "../controller/adminSign";

const AdminRouter = express.Router();

AdminRouter.post("/adminsign", Admin);
AdminRouter.post("/adminlogin", Login);
AdminRouter.post("/adminauth", LoginAuth);

export { AdminRouter };
