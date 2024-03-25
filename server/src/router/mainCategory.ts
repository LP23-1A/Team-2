import express from 'express';
import { newCategory, getCategories, updateCategory, getCategoryById, deleteCategory } from '../controller/mainCategory';

const mainCategory = express.Router();

mainCategory.route('/').post(newCategory).get(getCategories);
mainCategory.route('/:id').get(getCategoryById).put(updateCategory).delete(deleteCategory);

export { mainCategory };