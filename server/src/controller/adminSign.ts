import { Request, Response } from "express";
import { AdminModel } from "../model/adminSign";

const Admin = async (req: Request, res: Response) => {
  try {
    console.log("reqqqq", req.body);

    await AdminModel.create(req.body);

    return res.status(201).send({ success: true });
  } catch (error) {
    console.log(error, "err");
    return res.status(400).send({ error });
  }
};
export { Admin };
