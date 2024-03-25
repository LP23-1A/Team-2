import express from 'express';
import { newPayment, getPayments, updatePayment, getPaymentById, deletePayment } from '../controller/payment';

const payment = express.Router();

payment.route('/').post(newPayment).get(getPayments);
payment.route('/:id').get(getPaymentById).put(updatePayment).delete(deletePayment);

export { payment };