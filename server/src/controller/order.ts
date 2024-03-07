import { Response, Request } from 'express';
import {OrderModel} from "../model/order"

 const newOrder = async (req: Request, res: Response) => {
  try {
    await OrderModel.create(req.body);
    console.log(req.body);
    console.log("eee");
    
    return res.status(201).send({ success: true });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
    try {
      const orderData = await OrderModel.find().populate('users')
      // return res.status(201).send({ success: true });
      res.status(201).json(orderData);
    } catch (error) {
      return res.status(400).send({ error });
    }
  };

  const updateOrderById = async (req: Request, res: Response) => {
     const orderId = req.body;
     console.log(req.params);
     
     console.log(orderId);
      // console.log(req);
      
    try {
    
      const updateData = await OrderModel.findByIdAndUpdate(orderId, req.body, {new:true});  
      // return res.status(201).send({ success: true });
      res.status(201).json(updateData);
    } catch (error) {
      return res.status(400).send({ error });
    }
  };

  export {newOrder, getAllOrders, updateOrderById}
  