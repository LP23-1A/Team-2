import express from 'express';
import { newOrder, getAllOrders } from '../controller/order';


const order = express.Router();
order.post('/neworder', newOrder);
order.get("allorders",getAllOrders);
export { order };