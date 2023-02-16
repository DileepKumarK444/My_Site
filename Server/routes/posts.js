import express from "express";
import {
  getPosts,
  getPost,
  savePost,
  deletePost,
  updatePost,
  getAllPost,
} from "../controllers/Post.js";
const router = express.Router();

//Get All Posts
router.get("/", getPosts);
// Get single Post
// router.get("/:id", getPost);
router.get("/:id", getAllPost);
//Save Post
router.post("/", savePost);
//Delete Post
router.delete("/:id", deletePost);
//Update Post
router.patch("/:id", updatePost);

export default router;
