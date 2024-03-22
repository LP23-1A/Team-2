import mongoose, { Schema, model } from "mongoose";

const AdminSchema = new mongoose.Schema({
  city: { type: String },
  distric: { type: String },
  email: { type: String },
  name: { type: String },
  address: { type: String },
  zipCode: { type: Number },
  password: { type: String },
  repassword: { type: String },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});
const AdminModel = model("adminUser", AdminSchema);
export { AdminModel };
