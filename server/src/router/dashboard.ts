import express from "express";
import { dashboard } from "../controller/dashboard";

const adminStatus = express.Router();

adminStatus.get("/status", dashboard);

export { adminStatus };
