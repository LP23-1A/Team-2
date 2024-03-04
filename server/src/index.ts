import express from "express";
import dotenv from "dotenv";


dotenv.config();
const PORT = process.env.PORT || 8000;

const start = () => {
  const app = express();
  app.use(express.json());


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