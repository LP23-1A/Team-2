import mongoose from "mongoose";

const productMongoose = new mongoose.Schema({
    _id : String,
    productName : String,
    categoryID : String,
    price : String,
    qty : Number,
    thumbnails : String,
    images : String,
    coupon : String, 
    salePercent : String, 
    description : String,
    viewsCount : Number,
    createdAt : {
        type: Date,
        default: () => Date.now()
    },
    updatedAt : {
        type: Date,
        default: () => Date.now()
    },
})

const productSchema = mongoose.model('product', productMongoose)
export {productSchema}