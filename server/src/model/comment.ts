import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    comment: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
    updatedAt: Date,
});

const commentModel = mongoose.model('comment', commentSchema);
export { commentModel };