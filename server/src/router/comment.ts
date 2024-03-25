import express from 'express';
import { newComment, getComments, updateComment, getCommentById, deleteComment } from '../controller/comment';

const comment = express.Router();

comment.route('/').post(newComment).get(getComments);
comment.route('/:id').get(getCommentById).put(updateComment).delete(deleteComment);

export { comment };