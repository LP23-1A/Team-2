import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDatabase = async () => {
    try {
        const MONGODB_URI = "mongodb+srv://metamanppt:E19887310n@projects.fpnfjuw.mongodb.net/ecommerce?retryWrites=true&w=majority"
        await mongoose.connect(MONGODB_URI)
        console.log('Database connected');
    } catch (error:unknown) {
        throw new Error("Database cannot connect")
    }
}

export {connectDatabase}