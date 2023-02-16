import express from "express";
import {
  getUsers,
  getUser,
  // savePost,
  deleteUser,
  updateUser,
} from "../controllers/user.js";
const router = express.Router();

//Get All Users
router.get("/", getUsers);
// Get single User
router.get("/:id", getUser);
//Save User
// router.post("/", savePost);
//Delete User
router.delete("/:id", deleteUser);
//Update User
router.patch("/:id", updateUser);

export default router;
