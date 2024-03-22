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
    const user: any = await AdminModel.findOne({ email });
    const { role } = user;

    if (user) {
      if (user.password === password) {
        res.status(200).json({ message: "Login successful", role });
      } else {
        return res.status(401).send({ message: "Invalid login" });
      }
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid login" });
  }
};

const LoginCheck = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await AdminModel.findOne({ email });
    if (user) {
      const { role } = user;
      res.status(200).json({ role });
    } else {
      return res.status(404).json({ message: "Username not found" });
    }
  } catch (error) {
    console.error("Error in LoginCheck:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export { Admin, Login, LoginCheck };
