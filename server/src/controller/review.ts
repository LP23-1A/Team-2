import { Response, Request } from 'express';
import { reviewModel } from '../model/review';

 const newReview = async (req: Request, res: Response) => {
  try {
    await reviewModel.create(req.body); 
    return res.status(200).send({ success: true });
  } catch (error) {
    return res.status(400).send({success:false, error });
  }
};

const getReviews = async (req: Request, res: Response) => {
    try {
      const reviews = await reviewModel.find(); 
      return res.status(200).send({ success: true, reviews });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const updateReview = async (req: Request, res: Response) => {
    const {id} = req.params;   
    try {
      const updatedReview = await reviewModel.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send({ success: true, updatedReview });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const deleteReview = async (req: Request, res: Response) => {
    const {id} = req.params;     
    try {
      const deletedReview = await reviewModel.findByIdAndDelete(id);
      return res.status(200).send({ success: true, deletedReview });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const getReviewById = async (req: Request, res: Response) => {
    const reviewId = req.params.id;   
    try {
      const review = await reviewModel.find({_id:reviewId});
      return res.status(200).send({ success: true, review });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

export {newReview, getReviews, updateReview, deleteReview, getReviewById};
  