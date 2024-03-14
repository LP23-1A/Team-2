import express from 'express';
import { newOrder, getAllOrders, updateOrderById, getIncome, getOrders } from '../controller/order';


const order = express.Router();
order.route('/').post(newOrder).get(getAllOrders);
order.route('/income').get(getIncome);
order.route('/getorder').get(getOrders);
order.route('/:id').put(updateOrderById)
export { order };