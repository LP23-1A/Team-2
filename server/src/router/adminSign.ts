import express from "express";
import { Admin } from "../controller/adminSign";

const AdminRouter = express.Router();

AdminRouter.post("/adminsign", Admin);

export { AdminRouter };
