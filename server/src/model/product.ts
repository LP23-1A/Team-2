import mongoose from "mongoose";

const productMongoose = new mongoose.Schema({
    productId : {
        type: String,
        unique: true
    },
    productName : String,
    mainCategory: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"mainCategories"
    },
    subCategory: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"subCategories"
    },
    color: String,
    size : String,
    tag: [{
        type: String
    }],
    price : Number,
    qty : Number,
    thumbnails : String,
    images : [String],
    coupon : String, 
    salePercent : Number, 
    description : String,
    viewsCount : Number,
    createdAt : {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: Date,
})

const productSchema = mongoose.model("product", productMongoose);
export { productSchema };
