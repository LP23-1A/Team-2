import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./utils/database";
import { AdminRouter } from "./router/adminSign";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 8000;
const start = () => {
  connectDatabase();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/admin", AdminRouter);

  /*
  app.get("/", (req:Request, res:Response) => {
    res.status(200).send({ success: true, msg: "Working" });
  });
*/
  app.listen(PORT, () => {
    console.log("Server is running!!!");
  });
};
start();
