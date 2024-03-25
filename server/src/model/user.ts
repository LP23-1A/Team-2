import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  city: String,
  district: String,
  email: {  type: String, unique:true},
  name: String,
  address: String,
  zipCode: Number,
  password: String,
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

const userModel = mongoose.model("users", userSchema);
export { userModel };
