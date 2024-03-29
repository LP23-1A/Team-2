import { Response, Request } from 'express';
import { orderModel } from "../model/order"

const newOrder = async (req: Request, res: Response) => {
  console.log("front",req.body);
  const {userId,productId,phoneNumber,firstName,lastName,address,appart,city,amountPaid} = req.body;
  try {

    await orderModel.create({userId:userId,productId:productId,phoneNumber:phoneNumber,firstName:firstName,lastName:lastName,address:address,appart:appart,city:city,amountPaid:amountPaid});
    return res.status(201).send({ success: true });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orderData = await orderModel.find();
    return res.status(201).send({ success: true, orderData });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

const getIncome = async (req: Request, res: Response) => {
  try {
    const orderData = await orderModel.find().populate("userId");
    return res.status(201).send({ success: true, incomeData: orderData });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

const updateOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedData = await orderModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(201).send({ success: true, updatedData });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

const deleteOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedData = await orderModel.findByIdAndDelete(id);
    return res.status(201).send({ success: true, deletedData });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};

const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const orderData = await orderModel.findById(id).populate("userId").populate("productId");
    return res.status(201).send({ success: true, orderData });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};


export { newOrder, getAllOrders, updateOrderById, getIncome, deleteOrderById, getOrderById }

