import express from "express";

import { emailExistMiddleware } from "../middlewares/emailExistMiddleware.js";
import { signUpController } from "../controllers/signUpController.js";

export const signUp = express.Router();

signUp.post("/", emailExistMiddleware, signUpController);
