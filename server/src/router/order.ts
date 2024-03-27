import express from 'express';
import { newOrder, getAllOrders, updateOrderById, getIncome, deleteOrderById } from '../controller/order';

const order = express.Router();

order.route('/').post(newOrder).get(getAllOrders);
order.route('/:id').put(updateOrderById).delete(deleteOrderById);
order.route('/income').get(getIncome);


export { order };
