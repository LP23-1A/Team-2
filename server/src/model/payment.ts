import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    orderNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders',
    },
    paymentStatus : {
        type:String,
        enum:['paid', 'notPaid'],
        default: 'notPaid',
    },
    paymentType : {
        type:String,
        enum:['card', 'qpay','socialPay'],
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
    updatedAt: Date,
});

const paymentModel = mongoose.model('payment', paymentSchema);
export { paymentModel };