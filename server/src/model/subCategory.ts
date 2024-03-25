import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        unique: true,
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
    updatedAt: Date,
});

const categoryModel = mongoose.model('subCategories', categorySchema);
export { categoryModel };