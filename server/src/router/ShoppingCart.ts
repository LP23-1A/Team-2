import express from 'express';
import { newShoppingCart, getShoppingCart, updateShoppingCart, getShoppingCartById, deleteShoppingCart } from '../controller/shoppingCart';

const shoppingCart = express.Router();

shoppingCart.route('/').post(newShoppingCart).get(getShoppingCart);
shoppingCart.route('/:id').get(getShoppingCartById).put(updateShoppingCart).delete(deleteShoppingCart);

export { shoppingCart };