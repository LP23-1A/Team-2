import express from 'express';
import { newCategory, getCategories, updateCategory, getCategoryById, deleteCategory } from '../controller/subCategory';

const subCategory = express.Router();

subCategory.route('/').post(newCategory).get(getCategories);
subCategory.route('/:id').get(getCategoryById).put(updateCategory).delete(deleteCategory);

export { subCategory };