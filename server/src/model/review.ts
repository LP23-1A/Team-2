import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
    },  
    stars: {
        start1: Number,
        start2: Number,
        start3: Number,
        start4: Number,
        start5: Number,
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
    }],
    createdAt: {
        type:Date,
        default: Date.now,
    },
    updatedAt: Date,
});

const reviewModel = mongoose.model('review', reviewSchema);
export { reviewModel };