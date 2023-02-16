import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const erifyToken = (req, res, next) => {
  const token = req.cookie.access_token;
  if (!token) return next(createError(401, "You are not authendicated"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid"));

    req.user = user;
    next();
  });
};
