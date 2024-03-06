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
      await OrderModel.find(req.body);
      console.log(req.body);

      
      return res.status(201).send({ success: true });
    } catch (error) {
      return res.status(400).send({ error });
    }
  };

  export {newOrder, getAllOrders}
  