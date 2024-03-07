import express from 'express';
import { newOrder, getAllOrders, updateOrderById } from '../controller/order';


const order = express.Router();
order.route('/').post(newOrder).get(getAllOrders);
order.route('/:id').put(updateOrderById)
export { order };