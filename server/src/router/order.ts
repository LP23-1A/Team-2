import express from 'express';
import { newOrder, getAllOrders, updateOrderById, getIncome } from '../controller/order';


const order = express.Router();
order.route('/').post(newOrder).get(getAllOrders);
order.route('/income').get(getIncome);
order.route('/:id').put(updateOrderById)
export { order };