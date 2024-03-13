import { Response, Request } from "express";
import { AdminModel } from "../model/adminSign";
import { OrderModel } from "../model/order";
import { productSchema } from "../model/product";

const dashboard = async (req: Request, res: Response) => {
  try {
    const userCount = await AdminModel.find().countDocuments();
    const orderCount = await OrderModel.find().countDocuments();
    const incomeData = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          amountPaid: {
            $sum: "$amountPaid",
          },
        },
      },
    ]);
    const productInfo = await productSchema.find();

    return res.status(201).send({
      success: true,
      data: { userCount, orderCount, incomeData, productInfo },
    });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export { dashboard };
