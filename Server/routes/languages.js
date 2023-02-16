import express from "express";
import {
  getLanguages,
  getLanguage,
  saveLanguage,
  deleteLanguage,
  updateLanguage,
} from "../controllers/Language.js";
const router = express.Router();

//Get All Languages
router.get("/", getLanguages);
// Get single Language
router.get("/:id", getLanguage);
//Save Language
router.post("/", saveLanguage);
//Delete Language
router.delete("/:id", deleteLanguage);
//Update Language
router.patch("/:id", updateLanguage);

export default router;
