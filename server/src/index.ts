import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { user } from "./router/user";
import { product } from "./router/product";
import { order } from "./router/order";
import { subCategory } from "./router/subCategory";
import { mainCategory } from "./router/mainCategory";
import { adminStatus } from "./router/dashboard";
import { comment } from "./router/comment";
import { review } from "./router/review";
import { payment } from "./router/payment";
import { shoppingCart } from "./router/ShoppingCart";
import { AdminRouter } from "./router/adminSign";
import { connectDatabase } from "./utils/database";

dotenv.config();
const PORT = process.env.PORT || 8000;
connectDatabase();

const start = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use("/admin", AdminRouter);
  app.use("/user", user);
  app.use("/product", product);
  app.use("/dashboard", adminStatus);
  app.use("/order", order);
  app.use("/subCategory", subCategory);
  app.use("/mainCategory", mainCategory);
  app.use("/comment", comment);
  app.use("/review", review);
  app.use("/payment", payment);
  app.use("/shoppingCart", shoppingCart);

  app.listen(PORT, () => {
    console.log("Server is running!!!", PORT);
  });
};
start();
