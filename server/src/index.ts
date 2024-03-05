import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./utils/database";
import { AdminRouter } from "./router/adminSign";
import cors from "cors";
import { Product } from "./product/product.router";

dotenv.config();
const PORT = process.env.PORT || 8000;
connectDatabase()

const start = () => {
  connectDatabase();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/admin", AdminRouter);
  app.use("/Product", Product)

  app.get("/", (req:Request, res:Response) => {
    res.status(200).send({ success: true, msg: "Working" });
  });

  app.listen(PORT, () => {
    console.log("Server is running!!!");
  });
};
start();
