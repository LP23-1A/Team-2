import express from 'express';
import { newReview, getReviews, updateReview, getReviewById, deleteReview } from '../controller/review';

const review = express.Router();

review.route('/').post(newReview).get(getReviews);
review.route('/:id').get(getReviewById).put(updateReview).delete(deleteReview);

export { review };