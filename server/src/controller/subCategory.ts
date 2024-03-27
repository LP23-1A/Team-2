import { Response, Request } from 'express';
import { categoryModel } from '../model/subCategory';

 const newCategory = async (req: Request, res: Response) => {
  try {
    await categoryModel.create(req.body); 
    return res.status(200).send({ success: true });
  } catch (error) {
    return res.status(400).send({success:false, error });
  }
};

const getCategories = async (req: Request, res: Response) => {
    try {
      const categories = await categoryModel.find(); 
      return res.status(200).send({ success: true, categories });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const updateCategory = async (req: Request, res: Response) => {
    const id = req.params;   
    try {
      const updatedCategory = await categoryModel.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send({ success: true, updatedCategory });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const deleteCategory = async (req: Request, res: Response) => {
    const id = req.params;   
    try {
      const deleteCategory = await categoryModel.findByIdAndDelete(id);
      return res.status(200).send({ success: true, deleteCategory });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const getCategoryById = async (req: Request, res: Response) => {
    const id = req.params;   
    try {
      const category = await categoryModel.find(id);
      return res.status(200).send({ success: true, category });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

export {newCategory, getCategories, updateCategory, deleteCategory, getCategoryById};
  