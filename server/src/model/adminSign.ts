import mongoose, { Schema, model } from "mongoose";

const AdminSchema = new mongoose.Schema({
  city: { type: String },
  distric: { type: String },
  email: { type: String },
  khoroo: { type: String },
  name: { type: String },
  shopAddress: { type: String },
  shopName: { type: String },
  shoppingExprient: { type: String },
  shoppingType: { type: String },
});
const AdminModel = model("adminUser", AdminSchema);
export { AdminModel };
