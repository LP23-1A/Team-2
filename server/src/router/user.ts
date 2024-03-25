import express from "express";
import { Admin, Login, LoginCheck, getUsers, updateUser, deleteUserById } from "../controller/user";

const user = express.Router();

user.post("/adminsign", Admin);
user.post("/adminlogin", Login);
user.post("/adminauth", LoginCheck);
user.route("/").get(getUsers);
user.route('/:id').put(updateUser).delete(deleteUserById);

export { user };