import { Request, Response } from "express";
import { productSchema } from "../model/product";

export const createProduct = async (req : Request, res : Response) => {
    try {
        const {productName : productName, description : description, price : price, qty : qty} = req.body
        const result = await productSchema.create({productName : productName, description : description, price : price, qty : qty, })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req : Request, res : Response) => {
    try {
        const { productID } = req.params
        const deleteOneProduct = await productSchema.findByIdAndDelete(productID)
        res.status(201).send({success: true, deleteOneProduct})
        console.log("deleted");
    } catch (error) {
        res.status(500).send(error)
    }
}
 
export const updateProduct = async (req : Request, res : Response) => {
    try {
        const { productID } = req.params
        const updateOneProduct = await productSchema.findByIdAndUpdate(productID)
        res.status(201).send({success: true, updateOneProduct})
        console.log("updated");
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getAllProduct = async (req : Request, res : Response) => {
    try {
        const getProduct = await productSchema.find()
        res.status(201).send(getProduct)
    } catch (error) {
        res.status(500).send(error)
    }
}