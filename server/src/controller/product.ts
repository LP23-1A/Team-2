import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Request, Response } from "express";
import multer from "multer";
import dotenv from "dotenv";
import { productSchema } from "../model/product";

dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const createProduct = async (req: Request, res: Response) => {
    // const { productName: productName, description: description, price: price, qty: qty, categoryID: categoryID, images: images } = req.body
    try {
        const result = await productSchema.create(req.body);
        return res.status(200).send({ success: true , result});
    } catch (error) {
        return res.status(400).send({success:false, error });
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const productID = req.params.id
    try {
        const deleteOneProduct = await productSchema.findByIdAndDelete(productID)
        res.status(201).send({ success: true, deleteOneProduct })
    } catch (error) {
        res.status(500).send({success: false, error})
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const productID = req.params.id
    try {
        const updateOneProduct = await productSchema.findByIdAndUpdate(productID, req.body, { new: true })
        res.status(201).send({ success: true, updateOneProduct })
    } catch (error) {
        res.status(500).send({success: false, error})
    }
}

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const getProduct = await productSchema.find()
        res.status(201).send(getProduct)
    } catch (error) {
        res.status(500).send({success: false, error})
    }
}
