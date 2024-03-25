import { Response, Request } from 'express';
import { commentModel } from '../model/comment';

 const newComment = async (req: Request, res: Response) => {
  try {
    await commentModel.create(req.body); 
    return res.status(200).send({ success: true });
  } catch (error) {
    return res.status(400).send({success:false, error });
  }
};

const getComments = async (req: Request, res: Response) => {
    try {
      const comments = await commentModel.find(); 
      return res.status(200).send({ success: true, comments });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const updateComment = async (req: Request, res: Response) => {
    const {id} = req.params;   
    try {
      const updatedComment = await commentModel.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).send({ success: true, updatedComment });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const deleteComment = async (req: Request, res: Response) => {
    const {id} = req.params;     
    try {
      const deletedComment = await commentModel.findByIdAndDelete(id);
      return res.status(200).send({ success: true, deletedComment });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

const getCommentById = async (req: Request, res: Response) => {
    const commentid = req.params.id;   
    try {
      const comment = await commentModel.find({_id:commentid});
      return res.status(200).send({ success: true, comment });
    } catch (error) {
      return res.status(400).send({success:false, error });
    }
};

export {newComment, getComments, updateComment, deleteComment, getCommentById};
  