import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Language from "../models/Language.js";
// import { createError } from "../error.js";
// import jwt from "jsonwebtoken";

export const getLanguages = async (req, res, next) => {
  try {
    const Languages = await Language.find({}).sort({ createdAt: -1 });
    res.status(200).json(Languages);
  } catch (err) {
    next(err);
  }
};

export const saveLanguage = async (req, res, next) => {
  try {
    const newLanguage = new Language({ ...req.body });

    await newLanguage.save();
    // const { password, ...others } = user._doc;
    res.status(200).json(newLanguage);
  } catch (err) {
    //do it later
    next(err);
  }
};

export const getLanguage = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Language not found" });
    }
    const Language = await Language.findById({ _id: id });
    const { password, ...otheres } = Language._doc;
    if (!Language) return res.status(400).json({ error: "Language not found" });
    if (Language) return res.status(200).json(otheres);
  } catch (err) {
    //do it later
    next(err);
  }
};

export const deleteLanguage = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Language not found" });
    }
    const Language = await Language.findByIdAndDelete({ _id: id });
    // const { password, ...otheres } = Language._doc;
    if (!Language) return res.status(400).json({ error: "Language not found" });
    if (Language) return res.status(200).json(Language);
    // Language.deleteOne({_id:id})
  } catch (err) {
    //do it later
    next(err);
  }
};

export const updateLanguage = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Language not found" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const Language = await Language.findByIdAndUpdate(
      { _id: id },
      { ...req.body, password: hash }
    );

    // const { password, ...otheres } = Languages;
    if (!Language) return res.status(400).json({ error: "Language not found" });
    const Languages = await Language.find({}).sort({ createdAt: -1 });
    if (Language) return res.status(200).json(Languages);
  } catch (err) {
    //do it later
    next(err);
  }
};
