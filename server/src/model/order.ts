import mongoose, { Schema } from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userid: {
        type: Schema.Types.ObjectId ,
        ref: 'users',
    },
    orderNumber: {
        type: String,
      },
    
    status: {
        type: String,
        enum:['ordered', 'preparingToShip', 'shipped','delivered'],
        default: 'ordered',
    },
    phoneNumber: {
        type:String,
        
        length: {
            maxlength: 8,
            minlength: 8,
        }
    },
    deliveryDate: {
        type: Date,
    },
    amountPaid: {
            type:Number,        
    },
    amountToBePaid: {
        type: Number,
    },
    coupon: {
        type: String,
    },
    description: {
        type: String,
    },
    orderType: {
        type:String,
        enum:[''],
    },
    details: [{
        type:String,
    }],
    createdAt: {
        type:Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },

});

const OrderModel = mongoose.model('orders', OrderSchema);

export { OrderModel };