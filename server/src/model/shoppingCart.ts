import mongoose from "mongoose";

const ShoppingCartSchema = new mongoose.Schema({
  orderNumber: String,
  productCount: Number,
  createdAt : {
    type: Date,
    default: () => Date.now()
},
updatedAt: Date,
});

const shoppingCartModel = mongoose.model("shoppingCart", ShoppingCartSchema);
export { shoppingCartModel };
