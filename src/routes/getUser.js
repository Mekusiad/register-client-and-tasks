import express from "express";
import { idMiddleware } from "../middlewares/idMiddleware.js";
import { getUserController } from "../controllers/getUserController.js";

export const getUser = express.Router();

getUser.get("/:id", idMiddleware, getUserController);
