import { Response, Request } from 'express';
import { paymentModel } from '../model/payment';

 const newPayment = async (req: Request, res: Response) => {
  try {
    await paymentModel.create(req.body); 
    return res.status(200).send({ success: true });
  } catch (error) {
    return res.status(400).send({success:false, error });
  }
};

const getPayments = async (req: Request, res: Response) => {
    try {
      const payments = await paymentModel.find(); 
      return res.status(200).send({ success: true, payments });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const updatePayment = async (req: Request, res: Response) => {
    const {id} = req.params;   
    try {
      const updatedPayment = await paymentModel.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send({ success: true, updatedPayment });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const deletePayment = async (req: Request, res: Response) => {
    const {id} = req.params;     
    try {
      const deletedPayment = await paymentModel.findByIdAndDelete(id);
      return res.status(200).send({ success: true, deletedPayment });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const getPaymentById = async (req: Request, res: Response) => {
    const paymentId = req.params.id;   
    try {
      const payment = await paymentModel.find({_id:paymentId});
      return res.status(200).send({ success: true, payment });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

export {newPayment, getPayments, updatePayment, deletePayment, getPaymentById};
  