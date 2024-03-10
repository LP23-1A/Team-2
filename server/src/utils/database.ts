import  mongoose  from "mongoose";
 
const connectDatabase = async()=> {
    try {
    const MONGODB_URL = 'mongodb+srv://metamanppt:E19887310n@projects.fpnfjuw.mongodb.net/ecommerce?retryWrites=true&w=majority'
    await mongoose.connect(MONGODB_URL);
    console.log('Database connections is successful');}
    catch(error:unknown){
         throw new Error('Database cannot connected',);
    }
}
export {connectDatabase};