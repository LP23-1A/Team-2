import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `product`,
    },
    orderNumber: String,
    status: {
        type: String,
        enum: ['Шинэ-захиалга', 'Бэлтгэгдэж байна', 'Хүргэлтэнд гарсан', 'Хүргэгдсэн'],
        default: 'Шинэ-захиалга',
    },
    phoneNumber: String,
    firstName: String,
    lastName: String,
    address: String,
    appart: String,
    city: String,
    country: String,
    postalCode: String,
    deliveryDate: Date,
    amountPaid: Number,
    amountToBePaid: Number,
    coupon: String,
    description: String,
    orderType: String,
    details: [{
        type: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
});

const orderModel = mongoose.model('orders', OrderSchema);
export { orderModel };
