import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Post from "../models/Post.js";
import Language from "../models/Language.js";
// import Laguage from "../models/Laguage.js";
// import { createError } from "../error.js";
// import jwt from "jsonwebtoken";

export const getPosts = async (req, res, next) => {
  try {
    console.log(req.params);
    const Posts = await Post.find({}).sort({ createdAt: -1 });
    res.status(200).json(Posts);
  } catch (err) {
    next(err);
  }
};

export const savePost = async (req, res, next) => {
  try {
    const newPost = new Post({ ...req.body });

    await newPost.save();
    // const { password, ...others } = user._doc;
    res.status(200).json(newPost);
  } catch (err) {
    //do it later
    next(err);
  }
};

export const getAllPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ error: "Post not found" });
    // }
    console.log(id);
    const post = await Post.find({ langualge: id });
    const lang = await Language.findById({ _id: id });
    // console.log("asfasfsdfadfsdf");
    // const { password, ...otheres } = Post._doc;
    if (!post) return res.status(400).json({ error: "Post not found" });
    if (post) return res.status(200).json({ post: post, lang: lang });
  } catch (err) {
    //do it later
    next(err);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Post not found" });
    }
    const Post = await Post.findById({ _id: id });
    const { password, ...otheres } = Post._doc;
    if (!Post) return res.status(400).json({ error: "Post not found" });
    if (Post) return res.status(200).json(otheres);
  } catch (err) {
    //do it later
    next(err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Post not found" });
    }
    const Post = await Post.findByIdAndDelete({ _id: id });
    // const { password, ...otheres } = Post._doc;
    if (!Post) return res.status(400).json({ error: "Post not found" });
    if (Post) return res.status(200).json(Post);
    // Post.deleteOne({_id:id})
  } catch (err) {
    //do it later
    next(err);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Post not found" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const Post = await Post.findByIdAndUpdate(
      { _id: id },
      { ...req.body, password: hash }
    );

    // const { password, ...otheres } = Posts;
    if (!Post) return res.status(400).json({ error: "Post not found" });
    const Posts = await Post.find({}).sort({ createdAt: -1 });
    if (Post) return res.status(200).json(Posts);
  } catch (err) {
    //do it later
    next(err);
  }
};
