import { Request, Response } from "express";
import multer from "multer";
import { productSchema } from "../model/product";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config()

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

upload.array('avatar')

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3 = new S3Client({
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretAccessKey
    },
    region : bucketRegion,
  })

export const createProduct = async (req : Request, res : Response) => {
    try {
        // const params = {
        //     Bucket : bucketName
        // }
        // const command = new PutObjectCommand(params)
        const {productName : productName, description : description, price : price, qty : qty, categoryID : categoryID} = req.body
        const result = await productSchema.create({productName : productName, description : description, price : price, qty : qty, categoryID : categoryID})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req : Request, res : Response) => {
    try {
        const productID = req.params.id
        const deleteOneProduct = await productSchema.findByIdAndDelete(productID)
        res.status(201).send({success: true, deleteOneProduct})
        console.log("product deleted");
    } catch (error) {
        res.status(500).send(error)
    }
}

export const updateProduct = async (req : Request, res : Response) => {
    try {
        const productID = req.params.id
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