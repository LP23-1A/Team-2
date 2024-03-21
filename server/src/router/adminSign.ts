import express from "express";
import { Admin, Login, LoginAuth, LoginCheck,  } from "../controller/adminSign";

const AdminRouter = express.Router();

AdminRouter.post("/adminsign", Admin);
AdminRouter.post("/adminlogin", Login);
AdminRouter.post("/adminauth", LoginAuth);
AdminRouter.post("/admincheck", LoginCheck);

export { AdminRouter };
