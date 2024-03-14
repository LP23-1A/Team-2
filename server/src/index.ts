import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDatabase } from "..//src/utils/database";
import { AdminRouter } from "./router/adminSign";
import cors from "cors";
import { product } from "./router/product";
import { order } from "./router/order";
import { adminStatus } from "./router/dashboard";

dotenv.config();
const PORT = process.env.PORT || 8000;
connectDatabase();

const start = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/admin", AdminRouter);
  app.use("/product", product);
  app.use("/dashboard", adminStatus);
  app.use('/order',order);

  app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ success: true, msg: "Working" });
  });
  app.use("/order", order);

  



  // app.get("/", (req:Request, res:Response) => {
  //   res.status(200).send({ success: true, msg: "Working" });
  // });

  app.listen(PORT, () => {
    console.log("Server is running!!!", PORT);
  });
};
start();
