import { Response, Request } from 'express';
import { shoppingCartModel } from '../model/shoppingCart';

 const newShoppingCart = async (req: Request, res: Response) => {
  try {
    await shoppingCartModel.create(req.body); 
    return res.status(200).send({ success: true });
  } catch (error) {
    return res.status(400).send({success:false, error });
  }
};

const getShoppingCart = async (req: Request, res: Response) => {
    try {
      const ShoppingCarts = await shoppingCartModel.find(); 
      return res.status(200).send({ success: true, ShoppingCarts });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const updateShoppingCart = async (req: Request, res: Response) => {
    const {id} = req.params;   
    try {
      const updatedShoppingCart = await shoppingCartModel.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send({ success: true, updatedShoppingCart });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const deleteShoppingCart = async (req: Request, res: Response) => {
    const {id} = req.params;     
    try {
      const deletedShoppingCart = await shoppingCartModel.findByIdAndDelete(id);
      return res.status(200).send({ success: true, deletedShoppingCart });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const getShoppingCartById = async (req: Request, res: Response) => {
    const shoppingCartId = req.params.id;   
    try {
      const ShoppingCart = await shoppingCartModel.find({_id:shoppingCartId});
      return res.status(200).send({ success: true, ShoppingCart });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

export {newShoppingCart, getShoppingCart, updateShoppingCart, deleteShoppingCart, getShoppingCartById};
  