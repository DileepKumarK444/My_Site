import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "User not found" });
    }
    const user = await User.findById({ _id: id });
    const { password, ...otheres } = user._doc;
    if (!user) return res.status(400).json({ error: "User not found" });
    if (user) return res.status(200).json(otheres);
  } catch (err) {
    //do it later
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "User not found" });
    }
    const user = await User.findByIdAndDelete({ _id: id });
    // const { password, ...otheres } = user._doc;
    if (!user) return res.status(400).json({ error: "User not found" });
    if (user) return res.status(200).json(user);
    // User.deleteOne({_id:id})
  } catch (err) {
    //do it later
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "User not found" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = await User.findByIdAndUpdate(
      { _id: id },
      { ...req.body, password: hash }
    );

    // const { password, ...otheres } = users;
    if (!user) return res.status(400).json({ error: "User not found" });
    const users = await User.find({}).sort({ createdAt: -1 });
    if (user) return res.status(200).json(users);
  } catch (err) {
    //do it later
    next(err);
  }
};
