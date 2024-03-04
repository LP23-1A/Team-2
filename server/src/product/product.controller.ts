import { Request, Response } from "express";
import { productSchema } from "./product.schema";

export const createProduct = async (req : Request, res : Response) => {
    try {
        const {productName : productName, description : description, price : price, qty : qty} = req.body
        const result = await productSchema.create({productName : productName, description : description, price : price, qty : qty, })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}