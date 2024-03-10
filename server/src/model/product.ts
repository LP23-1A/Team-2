import mongoose from "mongoose";

const productMongoose = new mongoose.Schema({
    productName : String,
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
      },
    price : Number,
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