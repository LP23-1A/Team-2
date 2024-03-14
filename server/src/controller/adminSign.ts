import { Request, Response } from "express";
import { AdminModel } from "../model/adminSign";

const Admin = async (req: Request, res: Response) => {
  try {
    await AdminModel.create(req.body);
    return res.status(201).send({ success: true });
  } catch (error) {
    console.log(error, "err");
    return res.status(400).send({ error });
  }
};

const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: any = await AdminModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const LoginAuth = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: any = await AdminModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { Admin, Login, LoginAuth };
