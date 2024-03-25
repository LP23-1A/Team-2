import { Response, Request } from "express";
import { orderModel } from "../model/order";
import { productSchema } from "../model/product";
import { AdminModel } from "../model/adminSign";

const dashboard = async (req: Request, res: Response) => {
  try {
    const userCount = await AdminModel.find().countDocuments();
    const orderCount = await orderModel.find().countDocuments();
    const productInfo = await productSchema.find();
    const incomeData = await orderModel.aggregate([
      {
        $group: {
          _id: null,
          amountPaid: {
            $sum: "$amountPaid",
          },
        },
      },
    ]);

    return res.status(200).send({ success: true, data: { userCount, orderCount, incomeData, productInfo }, });
  }
  catch (error) {
    return res.status(400).send({success:false, error });
  }
};

export { dashboard };
