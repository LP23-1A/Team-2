import express from "express";
import { Admin, Login, LoginAuth, LoginCheck, LoginCheckRole } from "../controller/adminSign";

const AdminRouter = express.Router();

AdminRouter.post("/adminsign", Admin);
AdminRouter.post("/adminlogin", Login);
AdminRouter.post("/adminauth", LoginAuth);
AdminRouter.post("/admincheck", LoginCheck);
AdminRouter.post("/admincheckrole", LoginCheckRole);

export { AdminRouter };
