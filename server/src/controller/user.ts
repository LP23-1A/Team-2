import { Request, Response } from "express";
import { userModel } from "../model/user";

const Admin = async (req: Request, res: Response) => {
  try {
    await userModel.create(req.body);
    return res.status(201).send({ success: true });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: any = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const LoginCheck = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user: any = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error in LoginCheck:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export { Admin, Login, LoginCheck };
